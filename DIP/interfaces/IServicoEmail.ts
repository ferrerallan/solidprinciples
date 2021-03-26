export default interface IServicoEmail {
  enviarEmail(from: string, to:string, content:string) : void
}