'use client';
import { useEffect, useRef } from 'react';

// Lebar viewport dipakai buat sebar posisi awal beberapa WebPet biar nggak numpuk
function getInitialX(initialX) {
  if (typeof initialX === 'number') return initialX;
  if (typeof window === 'undefined') return 10;
  return Math.max(16, Math.random() * (window.innerWidth - 32));
}

const DEFAULT_WEB_PET = {
  actions: ['idle', 'run', 'swipe', 'walk', 'walk_fast', 'with_ball'],
  hoverAction: 'swipe',
  hoverDist: 50,
  idleActions: [
    { name: 'idle', baseDuration: 2500, extraDuration: 2000 },
    { name: 'swipe', baseDuration: 1200, extraDuration: 800 },
  ],
  idleDist: 48,
  idlePauseMs: { min: 1500, max: 2200 },
  movementActions: [
    { name: 'walk', speedMultiplier: 1.0 },
    { name: 'walk_fast', speedMultiplier: 1.35 },
    { name: 'run', speedMultiplier: 1.8 },
  ],
  speed: 4.5,
  scale: 0.5,
  spriteSize: { w: 100, h: 100 },
  followMouse: false,
};

const WEB_PET_SPEEDS = {
  bear: 3.9,
  cat: 4.6,
  chicken: 4.3,
  clippy: 3.2,
  cockatiel: 4.0,
  crab: 3.4,
  deno: 4.8,
  dog: 5.5,
  fox: 5.2,
  horse: 5.8,
  mod: 4.0,
  monkey: 4.7,
  morph: 4.0,
  panda: 3.6,
  rat: 4.9,
  rocky: 2.8,
  'rubber-duck': 3.0,
  skeleton: 4.4,
  snail: 1.4,
  snake: 3.7,
  totoro: 3.1,
  turtle: 2.2,
  zappy: 5.0,
};

export function getWebPetSpeed(animal, fallback) {
  return WEB_PET_SPEEDS[animal] ?? fallback;
}

function resolveAction(config, action) {
  if (config.actions.includes(action)) return action;
  return config.actions[0] ?? action;
}

function getGifUrl(config, action, colorOverride) {
  const resolvedColor = colorOverride ?? config.defaultColor;
  const resolvedAction = resolveAction(config, action);
  return `/media/${config.mediaFolder}/${resolvedColor}_${resolvedAction}_8fps.gif`;
}

function useWebPetAnimation(ref, config, colorOverride, initialX, tooltipRef) {
  const mousePos = useRef({ x: 0, y: 0 });
  const animalPos = useRef({ x: initialX ?? 10, y: 0 });
  const animationId = useRef(null);
  const idleAction = useRef('idle');
  const idleActionUntil = useRef(0);
  const idleCooldownUntil = useRef(0);
  const movementAction = useRef('walk');
  const movementSpeedMultiplier = useRef(1);
  const movementPauseUntil = useRef(0);
  const movementTargetX = useRef(null);
  const facingDir = useRef(1);
  const lastStepTime = useRef(0);

  useEffect(() => {
    if (!config) return;
    const activeConfig = config;

    const {
      speed,
      idleDist,
      hoverAction,
      hoverDist,
      idlePauseMs,
      scale: configScale,
      idleActions,
      movementActions,
      followMouse,
    } = activeConfig;
    const scale = configScale ?? 1;

    if (idleActions.length > 0) {
      idleAction.current = idleActions[0].name;
    }

    function setGif(name) {
      if (!ref.current) return;
      const src = getGifUrl(activeConfig, name, colorOverride);
      ref.current.style.backgroundImage = `url("${src}")`;
    }

    function pickIdleAction(ts) {
      const index = Math.floor(Math.random() * idleActions.length);
      const action = idleActions[index];
      if (!action) return;
      idleAction.current = action.name;
      idleActionUntil.current =
        ts + action.baseDuration + Math.random() * action.extraDuration;
      idleCooldownUntil.current = idleActionUntil.current + idlePauseMs.min / 8;
    }

    function pickMovementAction() {
      const index = Math.floor(Math.random() * movementActions.length);
      const action = movementActions[index];
      if (!action) return;
      movementAction.current = action.name;
      movementSpeedMultiplier.current = action.speedMultiplier;
    }

    function scheduleMovementPause(ts) {
      const extra = Math.max(0, idlePauseMs.max - idlePauseMs.min);
      movementPauseUntil.current = ts + idlePauseMs.min + Math.random() * extra;
    }

    function pickMovementTarget(x, boundsWidth) {
      const margin = 16;
      const maxX = Math.max(margin, boundsWidth - margin);
      const availableLeft = Math.max(0, x - margin);
      const availableRight = Math.max(0, maxX - x);
      const minDist = boundsWidth * 0.2;
      const maxDist = boundsWidth * 0.55;
      const dist = minDist + Math.random() * Math.max(0, maxDist - minDist);

      const canLeft = availableLeft >= dist;
      const canRight = availableRight >= dist;

      let dir;
      if (canLeft && canRight) {
        dir = Math.random() < 0.5 ? -1 : 1;
      } else if (canLeft) {
        dir = -1;
      } else if (canRight) {
        dir = 1;
      } else {
        dir = availableLeft > availableRight ? -1 : 1;
      }

      movementTargetX.current = Math.min(
        maxX,
        Math.max(margin, x + dir * dist),
      );
    }

    function animate(ts) {
      const stepMs = 125;
      if (ts - lastStepTime.current < stepMs) {
        animationId.current = requestAnimationFrame(animate);
        return;
      }
      lastStepTime.current = ts;
      let { x } = animalPos.current;
      const rect = ref.current?.getBoundingClientRect();
      const parentRect =
        ref.current?.parentElement?.getBoundingClientRect() ??
        { left: 0, width: window.innerWidth };
      const parentWidth = parentRect.width;
      const spriteWidth = rect?.width ?? activeConfig.spriteSize.w;

      let targetX;

      if (followMouse) {
        targetX = mousePos.current.x - parentRect.left;
      } else {
        if (ts < movementPauseUntil.current) {
          targetX = x;
        } else {
          if (movementTargetX.current === null) {
            pickMovementAction();
            pickMovementTarget(x, parentWidth);
          }
          targetX = movementTargetX.current ?? x;
        }
      }

      const diffX = targetX - x;
      const distX = Math.abs(diffX) || 0.0001;
      const idle = distX < idleDist;
      if (Math.abs(diffX) > 0.5) {
        facingDir.current = diffX < 0 ? -1 : 1;
      }

      const centerX = rect ? rect.left + rect.width / 2 : x;
      const centerY = rect
        ? rect.top + rect.height / 2
        : window.innerHeight - 1;
      const distToMouse = Math.hypot(
        mousePos.current.x - centerX,
        mousePos.current.y - centerY,
      );
      const hoverTriggered = distToMouse <= hoverDist;

      if (tooltipRef?.current) {
        tooltipRef.current.style.opacity = hoverTriggered ? '1' : '0';
      }

      if (hoverTriggered) {
        setGif(hoverAction);
        if (ref.current) {
          ref.current.style.transform = `scale(${scale}) scaleX(${facingDir.current})`;
        }
      } else if (idle) {
        idleAction.current = resolveAction(activeConfig, idleAction.current);
        if (!followMouse && movementTargetX.current !== null) {
          movementTargetX.current = null;
          scheduleMovementPause(ts);
        }
        if (ts > idleCooldownUntil.current && ts > idleActionUntil.current) {
          pickIdleAction(ts);
        }
        setGif(idleAction.current);
      } else {
        x += (diffX / distX) * speed * movementSpeedMultiplier.current;
        x = Math.min(Math.max(16, x), parentWidth - 16);
        animalPos.current = { x, y: 0 };
        if (
          !followMouse &&
          movementTargetX.current !== null &&
          distX <= idleDist
        ) {
          movementTargetX.current = null;
          scheduleMovementPause(ts);
        }

        if (idleActions.length > 0) {
          idleAction.current = resolveAction(activeConfig, idleActions[0].name);
        }
        idleActionUntil.current = 0;
        idleCooldownUntil.current = 0;

        setGif(movementAction.current);
        if (ref.current) {
          ref.current.style.transform = `scale(${scale}) scaleX(${facingDir.current})`;
        }
      }

      if (ref.current) {
        ref.current.style.left = `${x - spriteWidth / 2}px`;
        if (idle) {
          ref.current.style.transform = `scale(${scale}) scaleX(${facingDir.current})`;
        }
      }

      animationId.current = requestAnimationFrame(animate);
    }

    function handleMouseMove(e) {
      mousePos.current = { x: e.clientX, y: e.clientY };
    }

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (!reduced) {
      document.addEventListener('mousemove', handleMouseMove);
      animationId.current = requestAnimationFrame(animate);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationId.current) cancelAnimationFrame(animationId.current);
    };
  }, [config, colorOverride, ref]);
}

export function WebPet({
  animal,
  color = 'brown',
  position = 'fixed',
  speed,
  scale,
  followMouse = false,
  initialX,
  hoverText,
}) {
  const ref = useRef(null);
  const tooltipRef = useRef(null);
  const startX = useRef(getInitialX(initialX));
  const config = {
    name: animal,
    mediaFolder: animal,
    defaultColor: color,
    actions: DEFAULT_WEB_PET.actions,
    hoverAction: DEFAULT_WEB_PET.hoverAction,
    hoverDist: DEFAULT_WEB_PET.hoverDist,
    idleActions: DEFAULT_WEB_PET.idleActions,
    idleDist: DEFAULT_WEB_PET.idleDist,
    idlePauseMs: DEFAULT_WEB_PET.idlePauseMs,
    movementActions: DEFAULT_WEB_PET.movementActions,
    speed: speed ?? getWebPetSpeed(animal, DEFAULT_WEB_PET.speed),
    scale: scale ?? DEFAULT_WEB_PET.scale,
    spriteSize: DEFAULT_WEB_PET.spriteSize,
    followMouse,
  };

  useWebPetAnimation(ref, config, color, startX.current, tooltipRef);
  const initialGif = getGifUrl(config, config.hoverAction, color);

  return (
    <div
      ref={ref}
      className="web-pet"
      style={{
        position,
        bottom: '0px',
        left: `${startX.current}px`,
        height: `${config.spriteSize.h}px`,
        width: `${config.spriteSize.w}px`,
        zIndex: 9999,
        backgroundImage: `url("${initialGif}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom center',
        backgroundSize: 'contain',
        imageRendering: 'pixelated',
        pointerEvents: 'none',
        transform: `scale(${config.scale ?? 1})`,
        transformOrigin: 'bottom center',
      }}
    >
      {hoverText && (
        <span
          ref={tooltipRef}
          style={{
            position: 'absolute',
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            marginBottom: '8px',
            whiteSpace: 'nowrap',
            background: 'var(--ink, #0a0a0a)',
            color: 'var(--paper, #fff)',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            border: '2px solid var(--ink, #0a0a0a)',
            opacity: 0,
            transition: 'opacity 0.15s ease',
            pointerEvents: 'none',
          }}
        >
          {hoverText}
        </span>
      )}
    </div>
  );
}