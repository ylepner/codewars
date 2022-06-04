export function getParticipants(handshakes: number): number {
  if (handshakes === 0) return 0
  if (handshakes === 1) return 2
  let count = 1
  while (handshakes > 0) {
    handshakes -= count
    count += 1
  }
  return count
}