export default function Loading() {
  return (
    <div className="wrap" style={{ paddingBlock: "clamp(48px, 8vw, 110px)" }} aria-busy="true">
      <span className="visually-hidden" role="status">
        Loading
      </span>
      <div className="skeleton" style={{ height: 18, width: 180, marginBottom: 28 }} />
      <div className="skeleton" style={{ height: "clamp(48px, 9vw, 110px)", marginBottom: 14 }} />
      <div className="skeleton" style={{ height: "clamp(48px, 9vw, 110px)", width: "62%", marginBottom: 44 }} />
      <div className="skeleton" style={{ aspectRatio: "20 / 9" }} />
    </div>
  );
}
