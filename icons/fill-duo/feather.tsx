import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather({
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
          d="M15.25 2.75C7.8618 3.3965 4.78169 8.6387 3.54089 12.126C3.92719 12.3299 4.20599 12.4561 4.20599 12.4561C5.01599 12.8189 5.81799 12.979 5.86499 12.9871C6.71899 13.1431 7.50799 13.221 8.23199 13.221C9.73899 13.221 10.962 12.8831 11.882 12.211C12.2526 11.94 12.8529 11.3975 13.2719 10.4725C11.5489 10.1244 10.8235 9.4588 10.8235 9.4588C10.8235 9.4588 12.9829 9.7125 13.9199 8.9859C14.4219 8.5679 14.8189 7.9881 15.0359 7.1551C15.1749 6.543 15.2639 5.951 15.3489 5.379C15.4839 4.4781 15.6109 3.628 15.8999 3.1231C15.9797 2.9842 15.9977 2.8287 15.9816 2.6749C15.5423 2.7184 15.25 2.75 15.25 2.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.75099 16C2.72269 16 2.69439 15.9985 2.66509 15.9951C2.25399 15.9482 1.9581 15.5766 2.0049 15.165C2.0186 15.0439 3.52049 3.02341 15.1846 2.00291C15.5918 1.96481 15.961 2.27191 15.9971 2.68451C16.0332 3.09711 15.7276 3.46091 15.3155 3.49701C4.85848 4.41201 3.50789 15.2255 3.49519 15.3349C3.45129 15.7177 3.12689 16 2.75099 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Feather;
