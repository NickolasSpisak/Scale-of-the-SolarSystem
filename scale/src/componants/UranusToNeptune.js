export default function UranusToNeptune() {
  const runCallback = (cb) => {
    return cb();
  };

  return (
    <div style={{ backgroundImage: "url(./images/spaceBackground.webp)" }}>
      {runCallback(() => {
        const row = [];
        for (var i = 0; i < 142613; i++) {
          row.push(<p key={i}>{i}</p>);
        }
        return row;
      })}
    </div>
  );
}
