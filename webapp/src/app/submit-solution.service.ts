import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solution } from './common/solution';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SubmitSolutionService {
  constructor(private httpClient: HttpClient) {}

  addSolution(solution: Solution): Observable<Solution> {
    return this.httpClient
      .post<Solution>('/solutions/add', solution)
      .pipe(catchError(this.errorHandler));
  }

  updateSolutionStatus(solution: string, solutionStatus: String): Observable<Solution> {
    console.log(solution);
    return this.httpClient
      .put<Solution>(
        `/solutions/update/solutionStatus?solutionId=${solution}&solutionStatus=${solutionStatus}`,
        { solutionId: solution, solutionStatus: 'Accepted' }
      )
      .pipe(catchError(this.errorHandler));
  }

  updateReviewComments(
    solutionId: string,
  reviewComments: []
  ): Observable<Solution> {
    return this.httpClient
      .put<Solution>(
        `/solutions/update/reviewComments?solutionId=${solutionId}&reviewComments=${reviewComments}`,
        { solutionId: solutionId }
      )
      .pipe(catchError(this.errorHandler));
  }
  updateSolution(solution: Solution, file: FormData):Observable<Solution> {
    return this.httpClient
      .post<Solution>(
        `/solutions/update?file${file}`,
        solution
      )
      .pipe(catchError(this.errorHandler));
  }

  public errorHandler(error: Response | any) {
    if (error instanceof ErrorEvent) {
      // client-side error
      return throwError('Something bad happened');
    } else {
      // server-side error
      return throwError(error);
    }
  }
}
