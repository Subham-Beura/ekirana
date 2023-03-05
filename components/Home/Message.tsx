import { NextPage } from "next";

interface Props {}

const Message: NextPage<Props> = ({}) => {
  return (
    <section className="flex h-fit flex-col items-center bg-white py-3">
      <div className="flex h-60 items-center justify-center font-lobster text-4xl text-[#737970]">
        <p className="w-screen max-w-3xl px-5 text-center">
          Every Ustav product is made from handpicked cotton from 100% organic
          fields
        </p>
      </div>
      <div className="flex h-32 w-screen max-w-5xl items-center justify-around">
        <div className="h-32 w-32 bg-[#737970]"></div>
        <div className="h-32 w-32 bg-[#737970]"></div>
        <div className="h-32 w-32 bg-[#737970]"></div>
      </div>
    </section>
  );
};

export default Message;
