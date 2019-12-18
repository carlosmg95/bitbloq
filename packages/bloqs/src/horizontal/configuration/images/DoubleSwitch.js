import React from "react";

const SvgDoubleSwitch = ({ switchValue, value, ...props }) => {
  if (switchValue === "0" && value === "pos2") {
    return (
      <svg width={80} height={56} viewBox="0 0 80 56" {...props}>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#AAA"
            d="M74.77 15.11l-1.364-8.197a3.214 3.214 0 00-3.17-2.684H9.184a3.212 3.212 0 00-3.17 2.684L4.65 15.11c-.188 1.127 0 10.063 0 10.063a2.757 2.757 0 002.721 3.208H72.05c1.704 0 3-1.529 2.72-3.208 0 0 .189-8.936 0-10.063"
          />
          <path
            fill="#CCC"
            d="M73.36 6.913a3.214 3.214 0 00-3.17-2.684H9.14a3.214 3.214 0 00-3.171 2.684l-1.365 8.196a2.757 2.757 0 002.722 3.208h64.678c1.704 0 3-1.529 2.721-3.208l-1.364-8.196z"
          />
          <path
            fill="#B61013"
            d="M57.314 13.375l-.752-9.381a2.3 2.3 0 00-2.294-2.116H9.14A3.213 3.213 0 005.97 4.56l-1.364 8.197c-.085.51-.044 2.731-.037 2.916a2.76 2.76 0 002.758 2.643H54.92a2.401 2.401 0 002.4-2.31c.004-.092.02-2.304-.006-2.632"
          />
          <path
            fill="#F0161E"
            d="M9.14 1.878A3.213 3.213 0 005.97 4.56l-1.365 8.197a2.756 2.756 0 002.72 3.207H54.92a2.4 2.4 0 002.394-2.59l-.751-9.381a2.301 2.301 0 00-2.296-2.116H9.14z"
          />
          <path
            fill="#B61013"
            d="M37.766 0h-12.39a2.29 2.29 0 00-2.282 2.096l-.819 9.71c-.024.282-.008 2.031-.007 2.106a2.106 2.106 0 002.107 2.053h13.51c.983 0 1.78-.795 1.78-1.778V1.897c0-1.048-.85-1.897-1.9-1.897"
          />
          <path
            fill="#F0161E"
            d="M23.093 2.096l-.818 9.71a2.105 2.105 0 002.1 2.282h13.51c.983 0 1.78-.796 1.78-1.778V1.897c0-1.048-.85-1.897-1.9-1.897H25.377a2.29 2.29 0 00-2.283 2.096"
          />
          <path
            fill="#323843"
            d="M34.16 54.956a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.266zm7.822 0a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zm7.822 0a.522.522 0 110 1.044h-4.266a.522.522 0 110-1.044h4.266zm-31.29 0a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zm7.823 0a.522.522 0 110 1.044H22.07a.522.522 0 110-1.044h4.267zm52.315-9.907a.522.522 0 011.046 0v3.633a.522.522 0 11-1.045 0V45.05zM1.054 48.682A.522.522 0 01.01 48.68l.013-3.637a.523.523 0 011.045.004l-.014 3.636zm9.638 6.274a.522.522 0 110 1.044H6.425a.522.522 0 110-1.044h4.267zM3 54.883a.522.522 0 11-.247 1.015A3.611 3.611 0 010 52.489v-.252a.522.522 0 111.045 0v.23A2.563 2.563 0 003 54.883zm54.626.073a.522.522 0 110 1.044H53.36a.522.522 0 110-1.044h4.266zm15.645 0a.522.522 0 110 1.044h-4.266a.522.522 0 110-1.044h4.266zm5.904-3.242c.289 0 .522.235.521.524v.238a3.612 3.612 0 01-2.752 3.421.524.524 0 01-.248-1.014 2.564 2.564 0 001.954-2.425v-.223a.524.524 0 01.524-.52h.001zM65.45 54.956a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zM1.89 28.961a.522.522 0 01-.43-.6l.117-.705a4.133 4.133 0 012.213-3.003.523.523 0 01.471.932 3.09 3.09 0 00-1.653 2.242l-.117.705a.523.523 0 01-.601.429zm-.808 9.84l-.003 2.697a.523.523 0 01-1.045-.003l.007-2.718a.52.52 0 111.018-.155.879.879 0 01.023.18zm77.568 2.696V38.8c0-.47.261-.595.523-.6.262-.006.523.181.522.578l.001 2.717a.522.522 0 01-1.046 0zm-1.564-13.669a3.085 3.085 0 00-2.222-2.462.523.523 0 01.277-1.007 4.133 4.133 0 012.975 3.297.53.53 0 01-.517.618.51.51 0 01-.51-.425l-.003-.02zM.657 36.365a.521.521 0 01-.429-.6l.672-4.04a.522.522 0 011.032.172l-.673 4.04a.523.523 0 01-.601.428zm76.993-5.152a.522.522 0 111.031-.171l.673 4.039a.522.522 0 11-1.03.171l-.674-4.039zm-47.724-5.956a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.515 0a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.515 0a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.514 0a.522.522 0 110-1.044h4.099a.522.522 0 110 1.044h-4.1zm34.158 0h-4.099a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044zm15.552-.522a.522.522 0 01-.522.522h-4.1a.522.522 0 110-1.044h4.1c.288 0 .522.233.522.522zm7.515 0a.522.522 0 01-.523.522h-4.098a.522.522 0 110-1.044h4.098c.29 0 .523.233.523.522zm-15.03 0a.522.522 0 01-.522.522h-4.1a.522.522 0 110-1.044h4.1c.289 0 .523.233.523.522zm22.545 0a.522.522 0 01-.523.522H67.5a.522.522 0 110-1.044h4.1c.288 0 .522.233.522.522z"
          />
        </g>
      </svg>
    );
  }
  if (switchValue === "0" && value === "pos1") {
    return (
      <svg width={80} height={56} viewBox="0 0 80 56" {...props}>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#AAA"
            d="M4.82 15.11l1.364-8.197A3.214 3.214 0 019.355 4.23h61.05a3.212 3.212 0 013.171 2.684l1.364 8.196c.188 1.127 0 10.063 0 10.063a2.757 2.757 0 01-2.72 3.208H7.54c-1.703 0-3-1.529-2.72-3.208 0 0-.188-8.936 0-10.063"
          />
          <path
            fill="#CCC"
            d="M6.23 6.913A3.214 3.214 0 019.4 4.229h61.05a3.214 3.214 0 013.172 2.684l1.364 8.196a2.757 2.757 0 01-2.721 3.208H7.586c-1.704 0-3-1.529-2.72-3.208L6.23 6.913z"
          />
          <path
            fill="#B61013"
            d="M22.277 13.375l.751-9.381a2.3 2.3 0 012.294-2.116h45.13a3.213 3.213 0 013.17 2.683l1.364 8.197c.085.51.043 2.731.036 2.916a2.76 2.76 0 01-2.757 2.643H24.67a2.401 2.401 0 01-2.4-2.31c-.004-.092-.02-2.304.006-2.632"
          />
          <path
            fill="#F0161E"
            d="M70.451 1.878a3.213 3.213 0 013.17 2.683l1.365 8.197a2.756 2.756 0 01-2.721 3.207H24.67a2.4 2.4 0 01-2.394-2.59l.751-9.381a2.301 2.301 0 012.295-2.116H70.45z"
          />
          <path
            fill="#B61013"
            d="M41.825 0h12.39c1.19 0 2.182.91 2.282 2.096l.819 9.71c.023.282.008 2.031.007 2.106a2.106 2.106 0 01-2.107 2.053h-13.51c-.984 0-1.78-.795-1.78-1.778V1.897c0-1.048.85-1.897 1.899-1.897"
          />
          <path
            fill="#F0161E"
            d="M56.497 2.096l.819 9.71a2.105 2.105 0 01-2.1 2.282h-13.51c-.984 0-1.78-.796-1.78-1.778V1.897c0-1.048.85-1.897 1.899-1.897h12.39c1.19 0 2.182.91 2.282 2.096"
          />
          <path
            fill="#AAA"
            d="M19.122 11.273c0 .804-1.815 1.455-4.052 1.455-2.239 0-4.052-.651-4.052-1.455s1.813-1.456 4.052-1.456c2.237 0 4.052.652 4.052 1.456"
          />
          <path
            fill="#323843"
            d="M34.16 54.956a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.266zm7.822 0a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zm7.822 0a.522.522 0 110 1.044h-4.266a.522.522 0 110-1.044h4.266zm-31.29 0a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zm7.823 0a.522.522 0 110 1.044H22.07a.522.522 0 110-1.044h4.267zm52.315-9.907a.522.522 0 011.046 0v3.633a.522.522 0 11-1.045 0V45.05zM1.054 48.682A.522.522 0 01.01 48.68l.013-3.637a.523.523 0 011.045.004l-.014 3.636zm9.638 6.274a.522.522 0 110 1.044H6.425a.522.522 0 110-1.044h4.267zM3 54.883a.522.522 0 11-.247 1.015A3.611 3.611 0 010 52.489v-.252a.522.522 0 111.045 0v.23A2.563 2.563 0 003 54.883zm54.626.073a.522.522 0 110 1.044H53.36a.522.522 0 110-1.044h4.266zm15.645 0a.522.522 0 110 1.044h-4.266a.522.522 0 110-1.044h4.266zm5.904-3.242c.289 0 .522.235.521.524v.238a3.612 3.612 0 01-2.752 3.421.524.524 0 01-.248-1.014 2.564 2.564 0 001.954-2.425v-.223a.524.524 0 01.524-.52h.001zM65.45 54.956a.522.522 0 110 1.044h-4.267a.522.522 0 110-1.044h4.267zM1.89 28.961a.522.522 0 01-.43-.6l.117-.705a4.133 4.133 0 012.213-3.003.523.523 0 01.471.932 3.09 3.09 0 00-1.653 2.242l-.117.705a.523.523 0 01-.601.429zm-.808 9.84l-.003 2.697a.523.523 0 01-1.045-.003l.007-2.718a.52.52 0 111.018-.155.879.879 0 01.023.18zm77.568 2.696V38.8c0-.47.261-.595.523-.6.262-.006.523.181.522.578l.001 2.717a.522.522 0 01-1.046 0zm-1.564-13.669a3.085 3.085 0 00-2.222-2.462.523.523 0 01.277-1.007 4.133 4.133 0 012.975 3.297.53.53 0 01-.517.618.51.51 0 01-.51-.425l-.003-.02zM.657 36.365a.521.521 0 01-.429-.6l.672-4.04a.522.522 0 011.032.172l-.673 4.04a.523.523 0 01-.601.428zm76.993-5.152a.522.522 0 111.031-.171l.673 4.039a.522.522 0 11-1.03.171l-.674-4.039zm-47.724-5.956a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.515 0a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.515 0a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044h-4.1zm-7.514 0a.522.522 0 110-1.044h4.099a.522.522 0 110 1.044h-4.1zm34.158 0h-4.099a.522.522 0 110-1.044h4.1a.522.522 0 110 1.044zm15.552-.522a.522.522 0 01-.522.522h-4.1a.522.522 0 110-1.044h4.1c.288 0 .522.233.522.522zm7.515 0a.522.522 0 01-.523.522h-4.098a.522.522 0 110-1.044h4.098c.29 0 .523.233.523.522zm-15.03 0a.522.522 0 01-.522.522h-4.1a.522.522 0 110-1.044h4.1c.289 0 .523.233.523.522zm22.545 0a.522.522 0 01-.523.522H67.5a.522.522 0 110-1.044h4.1c.288 0 .522.233.522.522z"
          />
        </g>
      </svg>
    );
  }
  if (switchValue === "1" && value === "pos2") {
    return (
      <svg width={80} height={56} viewBox="0 0 80 56" {...props}>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#000"
            d="M74.948 19.403h-.003a.526.526 0 01-.522-.528l.014-4.098a.524.524 0 01.525-.521h.003c.29 0 .523.238.52.527l-.012 4.099a.525.525 0 01-.525.52zM15.08 1.049h-4.132a.525.525 0 110-1.049h4.132a.525.525 0 110 1.05zm7.575 0h-4.132a.524.524 0 010-1.049h4.132a.525.525 0 110 1.05zm7.576 0H26.1A.525.525 0 1126.1 0h4.132a.525.525 0 010 1.05zm7.575 0h-4.132a.525.525 0 110-1.049h4.132a.524.524 0 110 1.05zm7.575 0H41.25a.524.524 0 010-1.049h4.132a.525.525 0 110 1.05zm7.575 0h-4.132a.525.525 0 010-1.049h4.132a.525.525 0 110 1.05zm7.576 0H56.4A.525.525 0 1156.4 0h4.132a.524.524 0 110 1.05zm7.575 0h-4.132a.525.525 0 110-1.049h4.132a.525.525 0 110 1.05zM73.68 4.51a.525.525 0 01-.517-.438l-.127-.765a2.714 2.714 0 00-1.7-2.08.525.525 0 01.377-.98 3.769 3.769 0 012.358 2.888l.127.765a.524.524 0 01-.518.61zm-67.966.398a.524.524 0 01-.518-.611l.193-1.162A3.727 3.727 0 017.32.442a.524.524 0 11.495.925 2.685 2.685 0 00-1.392 1.94L6.23 4.47a.523.523 0 01-.516.44zm69.209 7.075a.525.525 0 01-.517-.438l-.678-4.077a.524.524 0 111.035-.172l.678 4.076a.526.526 0 01-.518.611zm-70.424.401h-.031a.525.525 0 01-.493-.556c.012-.2.026-.35.044-.456l.612-3.678a.524.524 0 011.035.172l-.612 3.68a3.575 3.575 0 00-.031.345.525.525 0 01-.524.493zm-.001 7.019a.525.525 0 01-.525-.524v-4.1a.524.524 0 011.05 0v4.1a.525.525 0 01-.524.524"
          />
          <path
            fill="#AAA"
            d="M.125 33.278l1.59-9.557a3.08 3.08 0 013.038-2.575h69.953a3.08 3.08 0 013.04 2.575l1.588 9.557c.282 1.694 0 14.81 0 14.81a3.396 3.396 0 01-3.35 3.953H3.475a3.396 3.396 0 01-3.35-3.953s-.282-13.116 0-14.81"
          />
          <path
            fill="#CCC"
            d="M79.334 33.278a3.396 3.396 0 01-3.35 3.953H3.475a3.396 3.396 0 01-3.35-3.953l1.59-9.557a3.08 3.08 0 013.038-2.575h69.953a3.08 3.08 0 013.04 2.575l1.588 9.557z"
          />
          <path
            fill="#B61013"
            d="M.117 30.48l1.59-9.557a3.08 3.08 0 013.038-2.574h51.31a2.576 2.576 0 012.566 2.359l.927 11.014c.032.377.01 2.979.008 3.069a2.502 2.502 0 01-2.5 2.44H3.466a3.397 3.397 0 01-3.396-3.47c.004-.16-.056-2.665.046-3.281"
          />
          <path
            fill="#F0161E"
            d="M.125 30.48l1.59-9.557a3.08 3.08 0 013.038-2.574h51.31a2.576 2.576 0 012.566 2.359l.927 11.014a2.502 2.502 0 01-2.493 2.71H3.475a3.396 3.396 0 01-3.35-3.952"
          />
          <path
            fill="#B61013"
            d="M19.728 29.378l.915-11.445a2.21 2.21 0 012.203-2.033h14.952c1.023 0 1.853.83 1.853 1.853v14.575a2.105 2.105 0 01-2.105 2.105h-15.41a2.415 2.415 0 01-2.414-2.314c-.004-.096-.02-2.404.006-2.741"
          />
          <path
            fill="#F0161E"
            d="M39.651 17.753V29.88a2.104 2.104 0 01-2.105 2.105h-15.41a2.414 2.414 0 01-2.408-2.607l.915-11.445a2.21 2.21 0 012.203-2.034h14.951c1.024 0 1.854.832 1.854 1.854"
          />
        </g>
      </svg>
    );
  }
  if (switchValue === "1" && value === "pos1") {
    return (
      <svg width={80} height={56} viewBox="0 0 80 56" {...props}>
        <g fill="none" fillRule="evenodd">
          <path
            fill="#000"
            d="M74.948 20.393h-.003a.526.526 0 01-.522-.528l.014-4.098a.526.526 0 01.525-.522h.003c.29.002.523.239.52.528l-.012 4.099a.525.525 0 01-.525.52zm-70.45 0a.525.525 0 01-.524-.525V15.77a.525.525 0 111.05 0v4.098c0 .29-.235.525-.525.525zM15.082 2.039H10.95a.524.524 0 110-1.05h4.132a.525.525 0 110 1.05zm7.575 0h-4.132a.525.525 0 010-1.05h4.132a.525.525 0 110 1.05zm7.576 0H26.1a.525.525 0 110-1.05h4.132a.525.525 0 010 1.05zm7.575 0h-4.132a.525.525 0 110-1.05h4.132a.524.524 0 010 1.05zm7.575 0H41.25a.524.524 0 110-1.05h4.132a.525.525 0 110 1.05zm7.575 0h-4.131a.525.525 0 110-1.05h4.13a.525.525 0 110 1.05zm7.576 0H56.4a.525.525 0 110-1.05h4.132a.524.524 0 010 1.05zm7.575 0h-4.132a.524.524 0 110-1.05h4.132a.525.525 0 110 1.05zm5.572 3.46a.525.525 0 01-.517-.437l-.127-.764a2.712 2.712 0 00-1.7-2.081.525.525 0 01.377-.98 3.766 3.766 0 012.358 2.888l.127.765a.524.524 0 01-.518.61zm-67.966.399a.524.524 0 01-.518-.61l.193-1.163a3.726 3.726 0 011.93-2.692.523.523 0 01.71.215.523.523 0 01-.215.709 2.688 2.688 0 00-1.392 1.94L6.23 5.46a.525.525 0 01-.517.439zm69.209 7.075a.525.525 0 01-.517-.438l-.678-4.077a.524.524 0 111.035-.171l.678 4.075a.525.525 0 01-.518.61zm-70.424.4h-.031a.525.525 0 01-.493-.554 4.84 4.84 0 01.044-.457l.612-3.678a.524.524 0 011.035.172l-.612 3.679a3.607 3.607 0 00-.031.346.525.525 0 01-.524.493z"
          />
          <path
            fill="#AAA"
            d="M79.335 34.267l-1.59-9.556a3.08 3.08 0 00-3.038-2.575H4.754a3.08 3.08 0 00-3.04 2.575L.126 34.267c-.281 1.696 0 14.81 0 14.81a3.396 3.396 0 003.35 3.953h72.51a3.396 3.396 0 003.35-3.953s.282-13.114 0-14.81"
          />
          <path
            fill="#CCC"
            d="M.047 34.267a3.397 3.397 0 003.35 3.954h72.509a3.397 3.397 0 003.35-3.954l-1.59-9.556a3.08 3.08 0 00-3.038-2.575H4.675a3.08 3.08 0 00-3.04 2.575L.048 34.267z"
          />
          <path
            fill="#B61013"
            d="M79.264 31.47l-1.589-9.558a3.082 3.082 0 00-3.039-2.575h-51.31a2.576 2.576 0 00-2.566 2.36l-.927 11.014c-.032.377-.01 2.98-.008 3.068a2.502 2.502 0 002.501 2.441h53.588a3.397 3.397 0 003.396-3.47c-.004-.159.056-2.665-.046-3.28"
          />
          <path
            fill="#F0161E"
            d="M79.256 31.47l-1.59-9.558a3.082 3.082 0 00-3.038-2.575h-51.31a2.576 2.576 0 00-2.566 2.36l-.927 11.014a2.502 2.502 0 002.493 2.711h53.588a3.396 3.396 0 003.35-3.953"
          />
          <path
            fill="#B61013"
            d="M59.653 30.367l-.915-11.444a2.21 2.21 0 00-2.203-2.034H41.583c-1.023 0-1.853.83-1.853 1.854v14.574c0 1.163.942 2.105 2.105 2.105h15.411a2.415 2.415 0 002.413-2.314c.004-.096.021-2.404-.006-2.74"
          />
          <path
            fill="#F0161E"
            d="M39.73 18.743V30.87c0 1.163.942 2.105 2.105 2.105h15.41c1.41 0 2.52-1.202 2.408-2.607l-.915-11.444a2.21 2.21 0 00-2.203-2.034H41.584c-1.024 0-1.854.83-1.854 1.854"
          />
          <path
            fill="#AAA"
            d="M16.302 30.178c0 .918-2.069 1.662-4.62 1.662-2.553 0-4.622-.744-4.622-1.662 0-.918 2.07-1.662 4.621-1.662 2.552 0 4.621.744 4.621 1.662"
          />
        </g>
      </svg>
    );
  }
  return null;
};

export default SvgDoubleSwitch;