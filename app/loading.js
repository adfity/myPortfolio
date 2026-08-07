export default function Loading() {
  return (
    <div className="page-loading">
      <div className="page-loading__box">
        <span className="page-loading__dot" />
        <span className="page-loading__dot" />
        <span className="page-loading__dot" />
      </div>
      <p className="page-loading__text">LOADING...</p>
    </div>
  );
}