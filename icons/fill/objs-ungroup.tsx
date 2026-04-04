import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjsUngroup({
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
          d="M9.25 2H3.75C2.7835 2 2 2.7835 2 3.75V9.25C2 10.2165 2.7835 11 3.75 11H9.25C10.2165 11 11 10.2165 11 9.25V3.75C11 2.7835 10.2165 2 9.25 2Z"
          fill={fill}
        />
        <path
          d="M12.5 7.75C12.5 7.33579 12.8358 7 13.25 7H14.25C15.2162 7 16 7.78379 16 8.75V14.25C16 15.2162 15.2162 16 14.25 16H8.75C7.78379 16 7 15.2162 7 14.25V13.25C7 12.8358 7.33579 12.5 7.75 12.5C8.16421 12.5 8.5 12.8358 8.5 13.25V14.25C8.5 14.3878 8.61221 14.5 8.75 14.5H14.25C14.3878 14.5 14.5 14.3878 14.5 14.25V8.75C14.5 8.61221 14.3878 8.5 14.25 8.5H13.25C12.8358 8.5 12.5 8.16421 12.5 7.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ObjsUngroup;
