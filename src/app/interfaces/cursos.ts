// interface criada para cursos

export interface Curso{
    nome: string,
    duracao: number,
    disponibilidade: Boolean
  }


export interface CursosJson {
    cursos:Curso[];
}

