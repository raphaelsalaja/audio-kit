import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Folders({
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
          d="M14.75 9H11.449L10.242 7.712C9.81802 7.259 9.22002 7 8.60002 7H7.24902C6.00802 7 4.99902 8.009 4.99902 9.25V14.75C4.99902 15.991 6.00802 17 7.24902 17H14.749C15.99 17 16.999 15.991 16.999 14.75V11.25C16.999 10.009 15.991 9 14.75 9Z"
          fill={fill}
        />
        <path
          d="M1 3.25C1 2.00765 2.00782 1 3.25 1H4.601C5.22377 1 5.81775 1.25805 6.24326 1.71226L7.45002 3H10.751C11.993 3 13.001 4.00762 13.001 5.25V6.5647C13.001 6.97891 12.6652 7.3147 12.251 7.3147C11.8368 7.3147 11.501 6.97891 11.501 6.5647V5.25C11.501 4.83618 11.1648 4.5 10.751 4.5H7.125C6.91764 4.5 6.71953 4.41415 6.57774 4.26284L5.14874 2.73794C5.00626 2.58583 4.80817 2.5 4.601 2.5H3.25C2.83618 2.5 2.5 2.83615 2.5 3.25V8.75C2.5 9.06921 2.70447 9.34592 3.00146 9.45161C3.3917 9.59049 3.59547 10.0194 3.45659 10.4097C3.31771 10.7999 2.88878 11.0037 2.49854 10.8648C1.63333 10.5569 1 9.73459 1 8.75V3.25Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Folders;
