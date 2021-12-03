const Main: React.FC = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        overflow: 'auto',
        overflowX: 'hidden',
      }}
    >
      {props.children}
    </div>
  );
};

export default Main;
