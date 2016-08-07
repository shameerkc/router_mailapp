import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

/**
 * Data
 */
export type User = {
  id: number;
  name: string;
  email: string;
};

export type Conversation = {
  id: number,
  title: string,
  user: User;
  messages: number[]
};

export type Message = {
  id: number;
  title: string;
  body: string;
  user: User;
};

export type AuthToken = string;

export class ConversationsRepo {
  static users = [
    { id: 0, name: 'Victor', email: 'victors@example.com' },
    { id: 1, name: 'Kate', email: 'kates@example.com' },
    { id: 2, name: 'Someone Else', email: 'someoneelse@example.com' }
  ];

  static conversations = [
    {
      id: 0,
      user: ConversationsRepo.users[0],
      title: "The Myth of Sisyphus",
      messages: [1, 2]
    },
    {
      id: 1,
      user: ConversationsRepo.users[1],
      title: "The Nicomachean Ethics",
      messages: [3, 4]
    }
  ];

  static messages = [
    {
      id: 0,
      title: 'The Path of the Absurd Man',
      body: 'The absurd man embraces the principles of revolt, freedom, and passion. What does it mean by freedom?',
      user:  ConversationsRepo.users[0]
    },
    {
      id: 1,
      title: 'Re: The Path of the Absurd Man',
      body: 'He means leaving without the appeal.',
      user:  ConversationsRepo.users[1]
    },

    {
      id: 2,
      title: 'Virtue as the Mean',
      body: 'Does he mean it is not a goal or that it is intermediate?',
      user:  ConversationsRepo.users[0]
    },
    {
      id: 3,
      title: 'Re: Virtue as the Mean',
      body: 'He means it as "intermediate", a virtue lies between excess and defect',
      user:  ConversationsRepo.users[2]
    }
  ];

  conversations(folder: string): Observable<Conversation[]> {
    return of(ConversationsRepo.conversations);
  }

  messageTitles(ids: number[]): Observable<Message[]> {
    return of(ConversationsRepo.messages.
      filter(m => ids.indexOf(m.id) > -1).
      map(b => ({id: b.id, title: b.title, user: b.user, body: null})));
  }

  message(id: number): Observable<Message> {
    return of(ConversationsRepo.messages[id]);
  }
}