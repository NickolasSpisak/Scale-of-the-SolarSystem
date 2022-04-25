export default function JupiterToSaturn() {
  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div style={{ backgroundImage: "url(./images/spaceBackground.webp)" }}>
      {runCallback(() => {
        const row = [];
        for (var i = 0; i < 63000; i++) {
          row.push(<p key={i}>{i}</p>);
        }
        return row;
      })}
    </div>
  );
}
