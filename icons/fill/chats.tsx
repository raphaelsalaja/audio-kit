import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chats({
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
          d="M14.25 5.5H8.75C7.51 5.5 6.5 6.509 6.5 7.75V12.25C6.5 13.491 7.51 14.5 8.75 14.5H12.71L15.245 16.805C15.387 16.933 15.567 17 15.75 17C15.853 17 15.956 16.979 16.054 16.936C16.325 16.816 16.5 16.547 16.5 16.25V7.75C16.5 6.509 15.49 5.5 14.25 5.5Z"
          fill={fill}
        />
        <path
          d="M1.5 4.25C1.5 2.73131 2.73116 1.5 4.25 1.5H10.25C11.2726 1.5 12.1489 2.06192 12.6208 2.87275C12.8292 3.23075 12.7079 3.68986 12.3499 3.89821C11.9919 4.10656 11.5327 3.98525 11.3244 3.62725C11.1035 3.24768 10.7044 3 10.25 3H4.25C3.55964 3 3 3.55969 3 4.25V11.5546L3.74551 10.8769C4.05201 10.5983 4.52634 10.6209 4.80497 10.9274C5.08359 11.2339 5.06099 11.7082 4.75449 11.9869L2.75449 13.805C2.53483 14.0047 2.21806 14.056 1.94658 13.9359C1.6751 13.8158 1.5 13.5469 1.5 13.25V4.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Chats;
