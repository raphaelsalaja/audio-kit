import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bookmarks({
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
          d="M12.25 17C12.0928 17 11.9365 16.9507 11.8047 16.854L7.5 13.6816L3.1953 16.854C2.9668 17.0215 2.66409 17.0474 2.41209 16.9194C2.15919 16.792 2 16.5327 2 16.25V6.75C2 5.2334 3.2334 4 4.75 4H10.25C11.7666 4 13 5.2334 13 6.75V16.25C13 16.5327 12.8408 16.792 12.5879 16.9194C12.4815 16.9736 12.3652 17 12.25 17Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.8047 13.854C14.9365 13.9507 15.0928 14 15.25 14C15.3652 14 15.4815 13.9736 15.5879 13.9194C15.8408 13.792 16 13.5327 16 13.25V3.75C16 2.2334 14.7666 1 13.25 1H7.75C6.2334 1 5 2.2334 5 3.75V4H10.25C11.7666 4 13 5.2334 13 6.75V12.524L14.8047 13.854Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bookmarks;
