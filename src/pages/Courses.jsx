import React from "react";
import imgg from "/src/assets/Hero Blocks (1).svg";
import con from "/src/assets/Container.svg";
import con2 from "/src/assets/Frame 2.svg";
import dele from "/src/assets/Delivery.png";
import che from "/src/assets/Checkmark--outline.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import FileBase64 from "react-file-base64";

import { Button } from "@mui/material";

const Courses = () => {
  let api = "http://localhost:3000/data";
  ///
  let [addModal, setAddModal] = useState(false);
  let [editModal, setEditModal] = useState(false);
  ///
  let [idx, setIdx] = useState("");
  let [title, setTitle] = useState("");
  let [img, setImg] = useState("");
  let [color, setColor] = useState("");
  let [price, setPrice] = useState("");
  let [rounded, setRounded] = useState("");
  ///
  let [sta, setSta] = useState("all");
  let [title2, setTitle2] = useState("");
  let [color2, setColor2] = useState("");
  let [img2, setImg2] = useState("");

  let [price2, setPrice2] = useState("");
  let [rounded2, setRounded2] = useState("");

  ///
  let [data, setData] = useState([]);
  ///
  function getImg(e) {
    setImg(e.base64);
    setImg2(e.base64);
    console.log(e);
  }
  async function get() {
    try {
      const { data } = await axios.get(`${api}?_sort=title`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function del(id) {
    try {
      const { data } = await axios.delete(`${api}/${id}`);

      get();
    } catch (error) {
      console.log(error);
    }
  }

  async function check(e) {
    console.log(e);
    try {
      if (e.status == true) {
        let user = {
          title: e.title,
          price: e.price,
          status: false,

          img: e.img,
          color: e.color,
          rounded: e.rounded,
        };
        let { data } = await axios.put(`${api}/${e.id}`, user);
        get();

        // setEditModal(false);
      } else {
        let user = {
          title: e.title,
          price: e.price,
          status: true,

          img: e.img,
          color: e.img,
          rounded: e.rounded,
        };
        let { data } = await axios.put(`${api}/${e.id}`, user);
        get();

        // setEditModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function editUser(e) {
    try {
      let user = {
        title: title2,
        price: price2,
        status: false,

        img: img2,
        color: color2,
        rounded: rounded2,
      };
      let { data } = await axios.put(`${api}/${idx}`, user);
      get();

      setEditModal(false);
    } catch (error) {
      console.log(error);
    }
  }
  async function addUser(e) {
    try {
      if (title.trim().length == 0 || price.trim().length == 0) {
        alert("zapolni");
      } else {
        let user = {
          title: title,
          price: price,
          status: false,

          img: img,
          color: color,
          rounded: rounded,
        };
        let { data } = await axios.post(`${api}`, user);
        get();
        setColor("");
        setTitle("");
        setRounded("");
        setAddModal(false);
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    get();
  }, []);

  function butEd(el) {
    setIdx(el.id);
    setTitle2(el.title);
    setColor2(el.color);
    setPrice2(el.price);

    setRounded2(el.rounded);
    setEditModal(true);
  }
  return (
    <>
      <div className="h-[100vh]  ">
        <img src={imgg} alt="" className=" dark:invert sm:hidden" />
        <img src={con} alt="" className="hidden sm:block  dark:invert" />
        <img
          src={con2}
          alt=""
          className="hidden sm:flex sm:w-[100%]  dark:invert"
        />
      </div>
      <section className="pl-[100px] pr-[100px] pt-[30px] pb-[30px] sm:p-[10px] sm:mt-[80px]  ">
        <h1 className="text-center text-[30px] font-[400] mt-[100px]">
          What makes our brand different
        </h1>
        <div className="flex justify-between pt-[40px] pb-[20px] sm:flex-wrap dark:invert">
          <div className="w-[23%] rounded-[5px] bg-[#F9F9F9] p-[20px] sm:w-[100%] sm:mt-[20px]">
            <img src={dele} alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px] dark:text-black">
              Made by true artisans
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              Handmade crafted goods made with real passion and craftmanship{" "}
            </h1>
          </div>
          <div className="w-[23%] rounded-[5px] bg-[#F9F9F9] p-[20px] sm:w-[100%] sm:mt-[20px]">
            <img src={che} alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px] dark:text-black">
              Unbeatable prices
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              For our materials and quality you won’t find better prices
              anywhere{" "}
            </h1>
          </div>
          <div className="w-[23%] rounded-[5px] bg-[#F9F9F9] p-[20px] sm:w-[100%] sm:mt-[20px]">
            <img src={dele} alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px] dark:text-black">
              Recycled packaging
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              We use 100% recycled packaging to ensure our footprint is
              manageable{" "}
            </h1>
          </div>
          <div className="w-[23%] rounded-[5px] bg-[#F9F9F9] p-[20px] sm:w-[100%] sm:mt-[20px]">
            <img src={che} alt="" />
            <h1 className="text-[20px] font-[400] pt-[10px] dark:text-black">
              Next day as standard
            </h1>
            <h1 className="text-[18px] font-[400] text-[#696767]">
              Order before 3pm and get your order the next day as standard
            </h1>
          </div>
        </div>
        <div className="flex justify-center my-[50px]">
          {/* <select
            name=""
            className="w-[200px] border-4 border-black text-[20px] text-[green]"
            id=""
            onClick={(e) => {
              setSta(e.target.value);
            }}
          >
            <option value="true">true</option>
            <option value="false">false</option>
            <option value="all  ">ALL</option>
          </select> */}
          <Button
            variant="contained"
            onClick={() => {
              setAddModal(true);
            }}
          >
            ADD
          </Button>
        </div>
        <div className="flex justify-between flex-wrap  sm:grid sm:grid-cols-2 gap-4  ">
          {data
            .filter((el) => {
              if (sta == "all") {
                return el;
              } else {
                console.log(el);
                return el.status == sta;
              }
            })
            .map((el) => {
              return (
                <>
                  <div
                    className="flex flex-col justify-between"
                    style={{
                      background: el.color,
                      padding: "10px",
                      borderRadius: el.rounded + "px",
                    }}
                  >
                    <img
                      src={el.img}
                      className="w-[250px] flex justify-center"
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-[20px]">{el.title}</h1>
                      <h1 className="text-[17px]">{el.price}</h1>
                      <div className="">
                        <Button
                          variant="contained"
                          onClick={() => {
                            butEd(el);
                          }}
                        >
                          EDIT
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            del(el.id);
                          }}
                        >
                          DELETE
                        </Button>
                        <Button
                          variant="contained"
                          onClick={() => {
                            check(el);
                          }}
                        >{`${el.status}`}</Button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </section>
      {editModal ? (
        <div className="absolute top-[1300px] left-[500px] justify-center flex-col flex gap-[20px] w-[350px] h-[500px] items-center bg-[#16d47bbe] rounded-[30px] ">
          <h1 className="text-center flex justify-center">EDIT!!</h1>
          <input
            className="border-4 border-black text-black"
            type="color"
            placeholder="color"
            value={color2}
            onChange={(e) => {
              setColor2(e.target.value);
            }}
          />
          <input
            className="border-4 border-black text-black"
            type="number"
            placeholder="rounded"
            value={rounded2}
            onChange={(e) => {
              setRounded2(e.target.value);
            }}
          />
          <input
            type="text"
            className="border-4 border-black text-black"
            value={title2}
            placeholder="title"
            onChange={(e) => {
              setTitle2(e.target.value);
            }}
          />
          <input
            type="text"
            value={price2}
            className="border-4 border-black text-black"
            placeholder="price"
            onChange={(e) => {
              setPrice2(e.target.value);
            }}
          />
          <FileBase64
            multiple={false}
            onDone={(e) => {
              getImg(e);
            }}
          />
          <button
            onClick={() => {
              editUser();
            }}
          >
            EDIT
          </button>
        </div>
      ) : null}
      {addModal ? (
        <div className="absolute top-[1300px] left-[500px] justify-center flex-col flex gap-[20px] w-[350px] h-[500px] items-center bg-[#16d47bbe] rounded-[30px] ">
          <h1 className="text-center flex justify-center">ADD!!!</h1>
          <input
            type="color"
            className="border-4 border-black text-black"
            placeholder="color"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <input
            type="number"
            className="border-4 border-black text-black"
            value={rounded}
            placeholder="rounded"
            onChange={(e) => {
              setRounded(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="title"
            className="border-4 border-black text-black"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="price"
            className="border-4 border-black text-black"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
          <FileBase64
            multiple={false}
            onDone={(e) => {
              getImg(e);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              addUser();
            }}
          >
            ADD
          </Button>
        </div>
      ) : null}
    </>
  );
};

export default Courses;
