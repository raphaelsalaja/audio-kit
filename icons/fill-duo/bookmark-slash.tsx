import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookmarkSlash({
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
          d="M14.9107 3.0894C14.6129 1.8926 13.5377 1 12.25 1H5.75C4.2334 1 3 2.2334 3 3.75V15L14.9107 3.0894Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.59082 16.5908L9.00002 13.6513L13.834 16.874C13.9595 16.9575 14.1045 17 14.25 17C14.3716 17 14.4932 16.9707 14.604 16.9111C14.8477 16.7807 15 16.5263 15 16.25V6.18161L4.59082 16.5908Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M1.99999 16.75C1.80759 16.75 1.61619 16.6768 1.46969 16.5303C1.17669 16.2373 1.17669 15.7627 1.46969 15.4698L15.4697 1.46981C15.7627 1.17681 16.2373 1.17681 16.5302 1.46981C16.8231 1.76281 16.8232 2.23741 16.5302 2.53031L2.53019 16.5303C2.38369 16.6768 2.19239 16.75 1.99999 16.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookmarkSlash;
