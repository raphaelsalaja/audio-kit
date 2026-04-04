import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileBookmark({
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
          d="M16.25 10H13.75C12.785 10 12 10.785 12 11.75V17.25C12 17.553 12.183 17.827 12.463 17.943C12.742 18.059 13.067 17.995 13.28 17.78L15 16.06L16.72 17.78C16.864 17.924 17.055 18 17.25 18C17.347 18 17.444 17.981 17.537 17.943C17.817 17.827 18 17.553 18 17.25V11.75C18 10.785 17.215 10 16.25 10Z"
          fill={secondaryfill}
        />
        <path
          d="M11.572 1.512L15.487 5.427C15.8155 5.7553 16 6.2009 16 6.6655V8.5H13.75C11.9566 8.5 10.5 9.95657 10.5 11.75V17H4.75C3.2312 17 2 15.7688 2 14.25V3.75C2 2.2312 3.2312 1 4.75 1H10.336C10.7996 1 11.2442 1.1841 11.572 1.512ZM5.75 6C5.33579 6 5 6.33579 5 6.75C5 7.16421 5.33579 7.5 5.75 7.5H7.75C8.16421 7.5 8.5 7.16421 8.5 6.75C8.5 6.33579 8.16421 6 7.75 6H5.75ZM5 9.75C5 9.33579 5.33579 9 5.75 9H9.75C10.1642 9 10.5 9.33579 10.5 9.75C10.5 10.1642 10.1642 10.5 9.75 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75ZM11.501 6.499C10.951 6.499 10.501 6.049 10.501 5.499L10.5 2.578L14.433 6.499H11.501Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FileBookmark;
