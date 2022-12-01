export default function Overlay() {
  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 10,
        top: 0,
        left: 0,
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
      }}>
      <a href='https://seanderue.dev/' style={{ position: 'absolute', bottom: 40, left: 90, fontSize: '13px' }}>
        SeanDeRue.dev
        <br />
      </a>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>Webstacks cover✨experience✨</div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>29/11/2022</div>
    </div>
  )
}
