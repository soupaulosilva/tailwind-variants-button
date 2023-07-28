import Button from "./components/button";

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-start-2">
          <span className="mb-4 uppercase">enabled</span>
        </div>
        <div>
          <span className="mb-4 uppercase">disabled</span>
        </div>
        <div className="flex items-center">
          <span>primary</span>
        </div>
        <div className="flex gap-5">
          <Button text="primary" />
        </div>
        <div>
          <Button text="primary" disabled/>
        </div>
        <div className="flex items-center">
          <span>success</span>
        </div>
        <div>
          <Button text="success" color="success"/>
        </div>
        <div>
          <Button text="success" color="success" disabled />
        </div>
        <div className="flex items-center">
          <span>warn</span>
        </div>
        <div>
          <Button text="warn" color="warn"/>
        </div>
        <div>
          <Button text="warn" color="warn" disabled />
        </div>
        <div className="flex items-center">
          <span>error</span>
        </div>
        <div>
          <Button text="error" color="error"/>
        </div>
        <div>
          <Button text="error" color="error" disabled />
        </div>
      </div>
    </div>
  )
}
