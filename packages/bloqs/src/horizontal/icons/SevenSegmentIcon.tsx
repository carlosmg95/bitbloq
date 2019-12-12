import React, { FC } from "react";
import { IBloq, IBloqType } from "../../index";

interface ISevenSegmentIconProps {
  bloq?: IBloq;
}

const smallSymbol = {
  writeNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M6.052 14.091H.196A.195.195 0 010 13.896v-1.331c0-.108.087-.196.196-.196h5.856c.107 0 .195.088.195.196v1.331a.195.195 0 01-.195.195m0-2.461H.196A.195.195 0 010 11.435v-1.331c0-.108.087-.196.196-.196h5.856c.107 0 .195.088.195.196v1.331a.196.196 0 01-.195.195"
    />
  ),
  incrementNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M6.052 12.852H3.976v2.076a.195.195 0 01-.195.196H2.467a.195.195 0 01-.195-.196v-2.076H.196A.195.195 0 010 12.657v-1.331c0-.108.087-.196.196-.196h2.076V9.072c0-.108.087-.196.195-.196h1.314c.107 0 .195.088.195.196v2.058h2.076c.107 0 .195.088.195.196v1.33a.195.195 0 01-.195.196"
    />
  ),
  decrementNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M6.052 12.86H.196A.195.195 0 010 12.667v-1.331c0-.108.087-.196.196-.196h5.856c.107 0 .195.088.195.196v1.33a.195.195 0 01-.195.196"
    />
  )
};

const bigSymbol = {
  writeNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M9.65 14.091H3.794a.195.195 0 01-.196-.195v-1.331c0-.108.088-.196.196-.196H9.65c.108 0 .196.088.196.196v1.331a.195.195 0 01-.196.195m0-2.461H3.794a.196.196 0 01-.196-.195v-1.331c0-.108.088-.196.196-.196H9.65c.108 0 .196.088.196.196v1.331a.196.196 0 01-.196.195"
    />
  ),
  incrementNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M9.65 12.852H7.574v2.076a.195.195 0 01-.195.196H6.065a.195.195 0 01-.195-.196v-2.076H3.794a.195.195 0 01-.196-.195v-1.331c0-.108.088-.196.196-.196H5.87V9.072c0-.108.088-.196.195-.196h1.314c.108 0 .195.088.195.196v2.058H9.65c.108 0 .196.088.196.196v1.33a.195.195 0 01-.196.196"
    />
  ),
  decrementNumber: (
    <path
      fill="#323843"
      fillRule="evenodd"
      d="M9.65 12.86H3.794a.195.195 0 01-.196-.194v-1.331c0-.108.088-.196.196-.196H9.65c.108 0 .196.088.196.196v1.33a.195.195 0 01-.196.196"
    />
  )
};

const smallDigits = [
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm0 5.729a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262v-3.323a.37.37 0 01.108-.261l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.324zm.092-10.995a.37.37 0 01.26-.108h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm4.532 1.202a.366.366 0 01.521 0l.482.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-4.532 10.255a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48zm4.05-4.046l.482-.48a.368.368 0 01.522 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M22.79 6.733a.366.366 0 01.521 0l.482.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-.481 6.209l.48-.48a.368.368 0 01.523 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.265 16.526a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.52 0l-.483-.48a.372.372 0 01-.108-.262v-3.323a.37.37 0 01.108-.261l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.324zm.092-10.995a.37.37 0 01.26-.108h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.728a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm4.532-4.526a.366.366 0 01.521 0l.482.48c.07.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.52 0l-.482-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.11-.261l.48-.48zm-4.532 10.255a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.289 5.53a.37.37 0 01.26-.107h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.729a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm4.532-4.526a.366.366 0 01.52 0l.483.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-4.532 10.255a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48zm4.05-4.046l.482-.48a.368.368 0 01.522 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm.092.462a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm4.532-4.526a.366.366 0 01.521 0l.482.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-.481 6.209l.48-.48a.368.368 0 01.523 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm.092-5.267a.37.37 0 01.26-.107h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.729a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm0 5.729a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48zm4.05-4.046l.482-.48a.368.368 0 01.522 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm0 5.729a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262v-3.323a.37.37 0 01.108-.261l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.324zm.092-10.995a.37.37 0 01.26-.108h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.728a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm0 5.729a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48zm4.05-4.046l.482-.48a.368.368 0 01.522 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,

  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.289 5.53a.37.37 0 01.26-.107h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm4.532 1.203a.366.366 0 01.52 0l.483.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-.481 6.209l.48-.48a.368.368 0 01.523 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm0 5.729a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262v-3.323a.37.37 0 01.108-.261l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.324zm.092-10.995a.37.37 0 01.26-.108h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.728a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm4.532-4.526a.366.366 0 01.521 0l.482.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-4.532 10.255a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.48zm4.05-4.046l.482-.48a.368.368 0 01.522 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M18.201 10.797a.372.372 0 01-.108.262l-.482.48a.368.368 0 01-.521 0l-.482-.48a.372.372 0 01-.108-.262V7.474a.37.37 0 01.108-.26l.482-.48a.366.366 0 01.521 0l.482.48a.37.37 0 01.108.26v3.323zm.092-5.267a.37.37 0 01.26-.107h3.33c.098 0 .19.038.26.107l.48.48a.369.369 0 010 .522l-.48.48a.367.367 0 01-.26.109h-3.33a.365.365 0 01-.26-.109l-.48-.48a.369.369 0 010-.522l.48-.48zm0 5.729a.37.37 0 01.26-.108h3.33c.098 0 .19.039.26.108l.48.479a.369.369 0 010 .523l-.48.48a.367.367 0 01-.26.108h-3.33a.365.365 0 01-.26-.108l-.48-.48a.369.369 0 010-.523l.48-.479zm4.532-4.526a.366.366 0 01.521 0l.482.48c.069.07.108.164.108.26v3.324a.37.37 0 01-.108.262l-.482.48a.37.37 0 01-.521 0l-.481-.48a.367.367 0 01-.109-.262V7.474a.37.37 0 01.109-.261l.481-.48zm-.481 6.209l.48-.48a.368.368 0 01.523 0l.48.48c.07.069.11.163.11.26v3.325a.368.368 0 01-.11.26l-.48.48a.37.37 0 01-.522 0l-.59-.588v-3.476a.37.37 0 01.109-.261z"
  />
];

const bigDigits = [
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm0 6.598a.425.425 0 01-.125.301l-.555.553a.422.422 0 01-.6 0l-.554-.553a.425.425 0 01-.125-.3v-3.829c0-.112.045-.22.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.19.125.301v3.828zm.106-12.665a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm5.22 1.385a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-5.22 11.811a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm4.666-4.66l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M20.289 5.933a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-.554 7.151l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 17.213a.425.425 0 01-.125.301l-.555.553a.422.422 0 01-.6 0l-.554-.553a.425.425 0 01-.125-.3v-3.829c0-.112.045-.22.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.19.125.301v3.828zm.106-12.665a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm5.22-5.213a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-5.22 11.811a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M15.069 4.548a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm5.22-5.213a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-5.22 11.811a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm4.666-4.66l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm.106.53a.429.429 0 01.3-.123h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm5.22-5.212a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-.554 7.151l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm.106-6.067a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm0 6.598a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm4.666-4.66l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm0 6.598a.425.425 0 01-.125.301l-.555.553a.422.422 0 01-.6 0l-.554-.553a.425.425 0 01-.125-.3v-3.829c0-.112.045-.22.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.19.125.301v3.828zm.106-12.665a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm0 6.598a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm4.666-4.66l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M15.069 4.548a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm5.22 1.385a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-.554 7.151l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm0 6.598a.425.425 0 01-.125.301l-.555.553a.422.422 0 01-.6 0l-.554-.553a.425.425 0 01-.125-.3v-3.829c0-.112.045-.22.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.19.125.301v3.828zm.106-12.665a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm5.22-5.213a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-5.22 11.811a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm4.666-4.66l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />,
  <path
    fill="#323843"
    fillRule="evenodd"
    d="M14.963 10.615a.427.427 0 01-.125.301l-.555.553a.424.424 0 01-.6 0l-.554-.553a.427.427 0 01-.125-.3v-3.83a.42.42 0 01.125-.3l.554-.555a.424.424 0 01.6 0l.555.554c.08.08.125.188.125.301v3.828zm.106-6.067a.424.424 0 01.3-.124h3.835c.112 0 .22.044.3.124l.553.553a.423.423 0 010 .601l-.552.554a.432.432 0 01-.301.124H15.37a.429.429 0 01-.301-.124l-.554-.554a.425.425 0 010-.6l.554-.554zm0 6.598a.429.429 0 01.3-.124h3.835c.112 0 .22.045.3.124l.554.554a.424.424 0 01-.001.6l-.552.554a.428.428 0 01-.301.124H15.37a.424.424 0 01-.301-.124l-.554-.553a.425.425 0 010-.601l.554-.554zm5.22-5.213a.426.426 0 01.602 0l.553.554c.08.079.125.187.125.3v3.828a.425.425 0 01-.125.3l-.553.554a.426.426 0 01-.602 0l-.554-.553a.425.425 0 01-.125-.301V6.787c0-.113.045-.221.125-.3l.554-.554zm-.554 7.151l.554-.554a.427.427 0 01.6 0l.555.554c.08.08.125.187.125.301v3.828a.424.424 0 01-.125.301l-.554.553a.425.425 0 01-.601 0l-.68-.678v.001-4.005c0-.114.046-.22.126-.3z"
  />
];

const SevenSegmentIcon: FC<ISevenSegmentIconProps> = ({ bloq }) => {
  const value =
    (bloq && bloq.parameters && (bloq.parameters.value as number)) || 0;
  const action =
    (bloq && bloq.parameters && bloq.parameters.action) || "writeNumber";
  const digit1 = value % 10;
  const digit2 = Math.floor(value / 10);

  return (
    <svg width={54} height={54} viewBox="0 0 24 24">
      {digit2 && (
        <>
          {smallSymbol[action]}
          <g transform="translate(-8.6, 0)">{smallDigits[digit2]}</g>
          {smallDigits[digit1]}
        </>
      )}
      {!digit2 && (
        <>
          {bigSymbol[action]}
          {bigDigits[digit1]}
        </>
      )}
    </svg>
  );
};

export default SevenSegmentIcon;
