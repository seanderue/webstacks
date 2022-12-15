export const customPointerEvents = {
  onPointerOver: () => {
    document.querySelector('canvas').style.setProperty('cursor', 'pointer', 'important')
  },
  onPointerOut: () => {
    document.querySelector('canvas').style.setProperty('cursor', 'grab')
  },
  onPointerDown: () => {
    document.querySelector('canvas').style.setProperty('cursor', 'pointer', 'important')
  },
  onPointerUp: () => {
    document.querySelector('canvas').style.setProperty('cursor', 'pointer', 'important')
  },
}
