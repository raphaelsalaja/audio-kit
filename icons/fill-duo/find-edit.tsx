import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FindEdit({
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
          d="M15.487 5.427L11.572 1.512C11.2442 1.1841 10.7996 1 10.336 1H4.75C3.2312 1 2 2.2312 2 3.75V14.25C2 15.7688 3.2312 17 4.75 17H13.25C14.7688 17 16 15.7688 16 14.25V6.6655C16 6.2009 15.8155 5.7553 15.487 5.427Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 6.5C7.06702 6.5 5.5 8.06675 5.5 10C5.5 11.9332 7.06702 13.5 9 13.5C9.69507 13.5 10.3428 13.2974 10.8874 12.9481L12.9394 15C13.2323 15.2929 13.7071 15.2929 14 15C14.2929 14.7071 14.2929 14.2322 14 13.9393L11.9481 11.8874C12.2974 11.3428 12.5 10.6951 12.5 10C12.5 8.06675 10.933 6.5 9 6.5ZM7 10C7 8.89525 7.89538 8 9 8C10.1046 8 11 8.89525 11 10C11 11.1048 10.1046 12 9 12C7.89538 12 7 11.1048 7 10Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FindEdit;
