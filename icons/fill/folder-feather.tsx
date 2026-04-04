import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderFeather({
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
          d="M16.5 8.586V6.25C16.5 4.734 15.267 3.5 13.75 3.5H8.724L8.346 3.029C7.821 2.375 7.039 2 6.201 2H4.25C2.733 2 1.5 3.234 1.5 4.75V13.25C1.5 14.767 2.733 16 4.25 16H8.699C9.353 13.271 11.55 9.29 16.5 8.586ZM3 6.314V4.75C3 4.061 3.561 3.5 4.25 3.5H6.201C6.582 3.5 6.938 3.67 7.176 3.967L7.779 4.719C7.921 4.896 8.136 5 8.364 5H13.75C14.439 5 15 5.561 15 6.25V6.314C14.623 6.12 14.202 6 13.75 6H4.25C3.798 6 3.377 6.12 3 6.314Z"
          fill={fill}
        />
        <path
          d="M17.9161 10.405C17.7765 10.1355 17.4991 9.97678 17.1847 10.0031C10.8302 10.5593 10.0128 17.0993 10.005 17.1652C9.95808 17.5768 10.254 17.9484 10.6652 17.9953C10.6945 17.9987 10.7228 18.0002 10.7511 18.0002C11.1271 18.0002 11.4513 17.718 11.4952 17.3352C11.4996 17.2965 11.5238 17.1039 11.5878 16.8115C11.6751 16.3893 12.0313 15.0158 12.8282 14.1096C12.8282 14.1096 12.5001 15.3908 12.7035 16.5002H13.5001C16.5499 16.5002 16.919 14.5148 17.1886 13.0651C17.3214 12.3522 17.4464 11.6794 17.8224 11.2345C18.0187 11.0026 18.0557 10.675 17.9161 10.405Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default FolderFeather;
