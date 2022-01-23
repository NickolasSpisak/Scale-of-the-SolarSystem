export default function EarthToMars() {
  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div style={{ backgroundImage: "url(/spaceBackground.webp)" }}>
      {runCallback(() => {
        const row = [];
        for (var i = 0; i < 6875; i++) {
          row.push(<p key={i}>{i}</p>);
        }
        return row;
      })}
    </div>
  );
}
