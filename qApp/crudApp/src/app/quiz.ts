export interface IQuiz {
    
         category  :string,
         type: string,
         difficulty: string,
         question : string,
         correct_answer : string,
         incorrect_answers : []

}

export interface Iresponse {
    response_code: number,
    results: IQuiz[]
}
