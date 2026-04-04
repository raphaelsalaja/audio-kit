import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileFeather({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M8.515 16.995C8.817 14.451 10.774 9.665 16 8.657V6.664C16 6.197 15.818 5.757 15.487 5.427L11.573 1.513C11.242 1.182 10.803 1 10.336 1H4.75C3.233 1 2 2.233 2 3.75V14.25C2 15.767 3.233 17 4.75 17L8.515 16.995Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.9165 10.4048C17.7769 10.1353 17.4995 9.97659 17.1851 10.0029C10.8306 10.5591 10.0132 17.0991 10.0054 17.165C9.95848 17.5766 10.2544 17.9482 10.6656 17.9951C10.6949 17.9985 10.7232 18 10.7515 18C11.1275 18 11.4517 17.7178 11.4956 17.335C11.5 17.2963 11.5242 17.1037 11.5882 16.8113C11.6755 16.3891 12.0317 15.0156 12.8286 14.1094C12.8286 14.1094 12.5005 15.3906 12.7039 16.5H13.5005C16.5503 16.5 16.9194 14.5146 17.189 13.0649C17.3218 12.352 17.4468 11.6792 17.8228 11.2343C18.0191 11.0024 18.0561 10.6748 17.9165 10.4048Z"
          fill={fill}
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 9.75C5 9.33579 5.33579 9 5.75 9H10.25C10.6642 9 11 9.33579 11 9.75C11 10.1642 10.6642 10.5 10.25 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileFeather;
