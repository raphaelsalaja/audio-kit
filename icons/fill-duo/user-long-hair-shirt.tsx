import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLongHairShirt({
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
          d="M9 12C6.21287 12 3.75882 13.4271 2.32789 15.5856C2.17525 15.8158 2.16154 16.1114 2.29221 16.3548C2.42287 16.5981 2.67676 16.75 2.953 16.75H15.047C15.3232 16.75 15.5771 16.5982 15.7078 16.3548C15.8384 16.1115 15.8248 15.816 15.6722 15.5857C14.2412 13.4259 11.787 12 9 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 9C15.88 9 17 10.12 17 11.5C17 11.776 16.776 12 16.5 12C15.12 12 14 10.88 14 9.5C14 9.224 14.224 9 14.5 9Z"
          fill={fill}
        />
        <path
          d="M8.55297 15.3547C8.73697 15.7237 9.26297 15.7237 9.44697 15.3547L10.9973 12.2514C10.3589 12.0873 9.68961 12 8.99999 12C8.30981 12 7.64007 12.0875 7.00122 12.252L8.55297 15.3547Z"
          fill={fill}
        />
        <path
          d="M5 6.5C5 4.29093 6.79082 2.5 9 2.5C11.2092 2.5 13 4.29093 13 6.5C13 8.70907 11.2092 10.5 9 10.5C6.79082 10.5 5 8.70907 5 6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.9989 6.59368C12.9994 6.56977 12.9998 6.54581 12.9999 6.52181C12.9984 6.25023 12.9701 5.97005 12.9174 5.68751C12.5419 3.86799 10.9307 2.5 8.99994 2.5C7.06916 2.5 5.45794 3.86799 5.08251 5.68751C5.0298 5.97005 5.00145 6.25023 5 6.52181C5.00012 6.54516 5.00045 6.56847 5.00097 6.59173C5.43892 6.5556 6.00604 6.50761 6.00557 6.49999C7.2533 6.28754 8.32629 5.55916 8.99994 4.54364C9.67359 5.56 10.7466 6.28781 11.9943 6.50006C11.9935 6.51265 12.561 6.55923 12.9989 6.59368Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserLongHairShirt;
