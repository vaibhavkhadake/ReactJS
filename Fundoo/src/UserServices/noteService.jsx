import { Component } from "react";
import axios from "axios";
const token = localStorage.getItem("token");

export class NoteService extends Component {
  getAllNoteService() {
    console.log("  getAllNote service called ");

    return axios.get(
      `http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList`,
      {
        headers: {
          Authorization: token
        }
      }
    );
  }
}

export function getNoteDetails(data) {
  console.log("data in more get details ", data);
  return axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesDetail/" +
      data.id,
    {
      headers: {
        Authorization: token
      }
    }
  );
}
export function creteLabel(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}
export function getAllTrashNotes() {
  return axios.get(
    `http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList`,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

export function getAllArchiveNotes() {
  return axios.get(
    `http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList`,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

export function getAllLabels() {
  return axios.get(
    `http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/getNoteLabelList`,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

export function UpdateNotes(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function TrashNotes(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function ChangeColorNotes(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function DeleteNotesLabel(data, token) {
  console.log("data and token ", data, token);
  return axios.delete(
    "http://fundoonotes.incubation.bridgelabz.com/api/noteLabels/" +
      data +
      "/deleteNoteLabel",
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function ArchiveNotes(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function getAllUserList(data) {
  return axios.post(
    `http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList`,
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}
export function AddCollaborator(data) {
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/" +
      data.id +
      "/AddcollaboratorsNotes",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}
export function DeleteCollaborator(data) {
  return axios.delete(
    "http://fundoonotes.incubation.bridgelabz.com/api/notes/" +
      data.id +
      "/removeCollaboratorsNotes/" +
      data.collaboratorUserId,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function ProfilePic(data, token) {
  console.log("data and token ", data, token);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/uploadProfileImage",
    data,
    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function AddQuesion(data) {
  console.log("data and token ", data);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/addQuestionAndAnswer",
    data,

    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}
export function ReplyQuesion(data) {
  console.log("data and token ", data);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/questionAndAnswerNotes/reply/" +
      data.id,
    data,

    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}

export function getService() {
  return axios.get(
    `http://fundoonotes.incubation.bridgelabz.com/api/user/service`,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

export function getCardDetails(data) {
  return axios.get(
    "http://fundoonotes.incubation.bridgelabz.com/api/productcarts/getCartDetails/" +
      data.id,
    {
      headers: {
        Authorization: token
      }
    }
  );
}

// export function getCardService(data) {
//   return axios.get(
//     `http://fundoonotes.incubation.bridgelabz.com/api/user/service`,
//     data,
//     {
//       headers: {
//         Authorization: token
//       }
//     }
//   );
// }

export function SelectService(data) {
  console.log("data and token ", data);
  return axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/productcarts/addToCart",
    data,

    {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        Authorization: token
      }
    }
  );
}
export function getMyCard() {
  return axios.get(
    `http://fundoonotes.incubation.bridgelabz.com/api/productcarts/myCart`,
    {
      headers: {
        Authorization: token
      }
    }
  );
}
