import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Repeat({
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
          d="M13.75 14.5H8.508C8.094 14.5 7.758 14.164 7.758 13.75C7.758 13.336 8.094 13 8.508 13H13.75C14.439 13 15 12.439 15 11.75V6.25C15 5.561 14.439 5 13.75 5H4.25C3.561 5 3 5.561 3 6.25V11.75C3 12.439 3.561 13 4.25 13H5C5.414 13 5.75 13.336 5.75 13.75C5.75 14.164 5.414 14.5 5 14.5H4.25C2.733 14.5 1.5 13.267 1.5 11.75V6.25C1.5 4.733 2.733 3.5 4.25 3.5H13.75C15.267 3.5 16.5 4.733 16.5 6.25V11.75C16.5 13.267 15.267 14.5 13.75 14.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.5 16.985C10.308 16.985 10.116 16.912 9.96999 16.765L7.47799 14.272C7.18499 13.979 7.18499 13.5041 7.47799 13.2111L9.96999 10.719C10.263 10.426 10.738 10.426 11.031 10.719C11.324 11.012 11.324 11.4871 11.031 11.7801L9.06899 13.742L11.031 15.704C11.324 15.997 11.324 16.472 11.031 16.765C10.885 16.911 10.693 16.985 10.501 16.985H10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Repeat;
