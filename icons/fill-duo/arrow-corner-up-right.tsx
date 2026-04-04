import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowCornerUpRight({
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
          d="M16 13.5H7.25C5.733 13.5 4.5 12.267 4.5 10.75V2C4.5 1.586 4.836 1.25 5.25 1.25C5.664 1.25 6 1.586 6 2V10.75C6 11.439 6.561 12 7.25 12H16C16.414 12 16.75 12.336 16.75 12.75C16.75 13.164 16.414 13.5 16 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.75 5.99999C8.558 5.99999 8.366 5.92699 8.22 5.77999L5.25 2.80999L2.28 5.77999C1.987 6.07299 1.512 6.07299 1.219 5.77999C0.926002 5.48699 0.926002 5.01199 1.219 4.71899L4.72 1.21999C5.013 0.926994 5.488 0.926994 5.781 1.21999L9.281 4.71999C9.574 5.01299 9.574 5.48799 9.281 5.78099C9.135 5.92699 8.943 6.00099 8.751 6.00099L8.75 5.99999Z"
          fill={fill}
        />
        <path
          d="M12.75 17C12.558 17 12.366 16.927 12.22 16.78C11.927 16.487 11.927 16.012 12.22 15.719L15.19 12.749L12.22 9.77901C11.927 9.48601 11.927 9.01101 12.22 8.71801C12.513 8.42501 12.988 8.42501 13.281 8.71801L16.781 12.218C17.074 12.511 17.074 12.986 16.781 13.279L13.281 16.779C13.135 16.925 12.943 16.999 12.751 16.999L12.75 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowCornerUpRight;
