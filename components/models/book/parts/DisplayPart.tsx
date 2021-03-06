import {PartMemo} from "../../../../models/memo"
import {Part} from "../../../../models/book"
import {DisplaySentence} from "./DisplaySentence"
import {DisplayHeader} from "./DisplayHeader"

type Props = {
  part: Part,
  lineNumber: number,
  memo?: PartMemo,
  updateMemo: (updatedMemo: PartMemo) => void,
}

export const DisplayPart = (props: Props) => {
  const part = props.part
  return part.type === "sentence" ?
    <DisplaySentence sentence={part} updateMemo={props.updateMemo} memo={props.memo} lineNumber={props.lineNumber}/> :
    <DisplayHeader header={part} updateMemo={props.updateMemo} memo={props.memo} />
}