import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    boxSizing: 'border-box',
    backgroundColor: 'lavender',
  },

  title: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    marginTop: 0,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#fff',
    backgroundColor: 'mediumpurple',
  },

  icon: {
    marginLeft: 15,
  },

  main: {
    padding: 30,
    textAlign: 'center',
  },

  contactsTitle: {
    margin: 0,
    marginBottom: 15,
    fontSize: 30,
    color: 'DimGrey',
  },
});

export default useStyles;
