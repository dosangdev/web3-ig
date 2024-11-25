"use client";

import Image from "next/image";
import Button from "../components/button";
import { motion } from "framer-motion";

export default function User() {
  const dummydata = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    image: `https://i.pravatar.cc/200?u=${i + 1}`, // Unsplash 랜덤 이미지
  }));

  return (
    <div className="flex flex-col max-w-[1200px] my-0 mx-auto py-[3rem] px-[5rem] ">
      <div className="flex flex-row px-[8rem]">
        <div className="flex items-center rounded-[50%] bg-[#000000] w-[150px] h-[150px]">
          <Image
            src={
              "https://postfiles.pstatic.net/MjAyMzEyMTdfMTcx/MDAxNzAyNzM5ODA3NzI0.l_7ilqf5mSRn9BeYixpd7LbBXA8LL9NFvKKiQLxFAyEg.esfKwQqakeXu9LGu-kXOqkQwtxzP3NECtANVradlcxIg.JPEG.kwonhayoung-/Screenshot%EF%BC%BF20231211%EF%BC%BF172022.jpg?type=w3840"
            }
            width={150}
            height={150}
            alt="프로필 사진"
            className="rounded-[50%]"
          ></Image>
        </div>
        <div className="w-[80%] pl-[5rem]">
          <div className="flex gap-[1rem] pb-[1rem]">
            <button className="text-xl text-primaryText font-bold">
              {"nippon_nam00"}
            </button>
            <Button
              label="프로필 편집"
              variant="editProfileButton"
              size="editProfileButton"
            />
            <Button
              label="보관된 스토리 보기"
              variant="editProfileButton"
              size="editProfileButton"
            />
            <button>
              <svg
                aria-label="옵션"
                className="x1lliihq x1n2onr6 x5n08af"
                fill="currentColor"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <title>옵션</title>
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="8.635"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></circle>
                <path
                  d="M14.232 3.656a1.269 1.269 0 0 1-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 0 1-.796.66m-.001 16.688a1.269 1.269 0 0 1 .796.66l.505.996h1.862l.505-.996a1.269 1.269 0 0 1 .796-.66M3.656 9.768a1.269 1.269 0 0 1-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 0 1 .66.796m16.688-.001a1.269 1.269 0 0 1 .66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 0 1-.66-.796M7.678 4.522a1.269 1.269 0 0 1-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 0 1-.096 1.03m11.8 11.799a1.269 1.269 0 0 1 1.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 0 1 .096-1.03m-14.956.001a1.269 1.269 0 0 1 .096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 0 1 1.03.096m11.799-11.8a1.269 1.269 0 0 1-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 0 1-1.03-.096"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex align-center gap-[1rem] pb-[1rem]">
            <p className="text-base py-1 font-semibold">게시물 {6}</p>
            <button className="bg-transparent text-lg font-medium ">
              {`팔로워 ${67}`}
            </button>
            <button className="bg-transparent text-lg font-medium ">
              {`팔로우 ${78}`}
            </button>
          </div>

          <button className="text-xs text-primaryText font-semibold bg-followText rounded-3xl hover:bg-followHover px-2 py-1">
            <svg
              aria-label="Threads"
              className="x1lliihq x1n2onr6 x5n08af inline mr-1"
              fill="currentColor"
              height="16"
              role="img"
              viewBox="0 0 192 192"
              width="16"
            >
              <title>Threads</title>
              <path
                className="xcslo1z"
                d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"
              ></path>
            </svg>
            <span>nippon_nam00</span>
          </button>
          <p className="text-sm font-black pt-2">상도의 커피타임~</p>
        </div>
      </div>
      <div className="pt-10 px-[7rem]">
        <button className="flex flex-col items-center gap-2">
          <div className="relative rounded-[50%] border-1 border-[#444444] w-20 h-20 ">
            <div className="absolute inset-1 bg-[#444444] bg-opacity-15 rounded-[50%]"></div>
            <svg
              aria-label="+ 아이콘"
              className="x1lliihq x1n2onr6 x10xgr34 absolute top-[21%] left-[22%]"
              fill="#737373"
              height="44"
              role="img"
              viewBox="0 0 24 24"
              width="44"
            >
              <title>+ 아이콘</title>
              <path d="M21 11.3h-8.2V3c0-.4-.3-.8-.8-.8s-.8.4-.8.8v8.2H3c-.4 0-.8.3-.8.8s.3.8.8.8h8.2V21c0 .4.3.8.8.8s.8-.3.8-.8v-8.2H21c.4 0 .8-.3.8-.8s-.4-.7-.8-.7z"></path>
            </svg>
          </div>
          <div className="text-sm">신규</div>
        </button>
      </div>
      <div className="my-0 mx-auto w-[90%] mt-10 w-full border-t-1 border-[#222222] border-solid">
        <div className="text-threadHover pt-3 flex gap-12 justify-center font-semibold">
          <button className="focus:text-secondary focus:font-black">
            게시물
          </button>
          <button className="focus:text-secondary focus:font-black">
            저장됨
          </button>
          <button className="focus:text-secondary focus:font-black">
            태그됨
          </button>
        </div>
        <div className="grid grid-cols-3 gap-1 text-center pt-3">
          {dummydata.map((item) => (
            <div
              key={item.id}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                className=" w-full h-full object-cover group-hover: scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-5">
                    <div className="flex gap-2">
                      <svg
                        aria-label="좋아요"
                        className="x1lliihq x1n2onr6 xyb1xck text-white inline"
                        fill="white"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>좋아요</title>
                        <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                      </svg>
                      <span>{2}</span>
                    </div>
                    <div className="flex gap-2">
                      <svg
                        aria-label="댓글 달기"
                        className="x1lliihq x1n2onr6 x5n08af inline"
                        fill="white"
                        height="24"
                        role="img"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <title>댓글 달기</title>
                        <path
                          d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                          fill="white"
                          stroke="currentColor"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        ></path>
                      </svg>{" "}
                      <span>{8}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="mt-10 mb-[52px] px-10 text-footerText">
        <div>
          <ul className="flex justify-between text-sm">
            <li>Meta</li>
            <li>소개</li>
            <li>블로그</li>
            <li>채용 정보</li>
            <li>도움말</li>
            <li>API</li>
            <li>개인정보처리방침</li>
            <li>약관</li>
            <li>위치</li>
            <li>instargram Lite</li>
            <li>Threads</li>
            <li>연락처 업로드 & 비사용자</li>
            <li>Meta Verified</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
