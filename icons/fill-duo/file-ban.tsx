import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileBan({
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
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V8.87583C15.38 8.63322 14.7053 8.5 14 8.5C10.9656 8.5 8.5 10.9656 8.5 14C8.5 15.1062 8.82769 16.1369 9.39116 17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14 10C11.794 10 10 11.794 10 14C10 16.206 11.794 18 14 18C16.206 18 18 16.206 18 14C18 11.794 16.206 10 14 10ZM14 11.5C14.416 11.5 14.802 11.612 15.147 11.792L11.792 15.147C11.612 14.802 11.5 14.415 11.5 14C11.5 12.622 12.622 11.5 14 11.5ZM14 16.5C13.584 16.5 13.198 16.388 12.853 16.208L16.208 12.853C16.388 13.198 16.5 13.585 16.5 14C16.5 15.378 15.378 16.5 14 16.5Z"
          fill={fill}
        />
        <path
          d="M15.8691 6.00095H12C11.45 6.00095 11 5.55095 11 5.00095V1.13098C11.212 1.21803 11.4068 1.34674 11.572 1.51197L15.487 5.42697C15.6527 5.59263 15.7818 5.78817 15.8691 6.00095Z"
          fill={fill}
        />
        <path
          d="M5 6.75C5 6.33579 5.33579 6 5.75 6H7.75C8.16421 6 8.5 6.33579 8.5 6.75C8.5 7.16421 8.16421 7.5 7.75 7.5H5.75C5.33579 7.5 5 7.16421 5 6.75Z"
          fill={fill}
        />
        <path
          d="M5.75 9C5.33579 9 5 9.33579 5 9.75C5 10.1642 5.33579 10.5 5.75 10.5H8.75C9.16421 10.5 9.5 10.1642 9.5 9.75C9.5 9.33579 9.16421 9 8.75 9H5.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default FileBan;
