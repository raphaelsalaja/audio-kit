import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowSearch({
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
          d="M14.25 2H3.75C2.233 2 1 3.23 1 4.75V13.25C1 14.77 2.233 16 3.75 16H8.8906C9.3046 16 9.6406 15.66 9.6406 15.25C9.6406 14.84 9.3046 14.5 8.8906 14.5H3.75C3.061 14.5 2.5 13.9399 2.5 13.25V8H15.5V9.26562C15.5 9.68553 15.836 10.0156 16.25 10.0156C16.664 10.0156 17 9.68553 17 9.26562V4.75C17 3.23 15.767 2 14.25 2ZM4 6C3.448 6 3 5.55 3 5C3 4.45 3.448 4 4 4C4.552 4 5 4.45 5 5C5 5.55 4.552 6 4 6ZM7 6C6.448 6 6 5.55 6 5C6 4.45 6.448 4 7 4C7.552 4 8 4.45 8 5C8 5.55 7.552 6 7 6Z"
          fill={fill}
        />
        <path
          d="M17.7803 16.7197L16.575 15.5146C16.8385 15.0683 17 14.5546 17 14C17 12.3457 15.6543 11 14 11C12.3457 11 11 12.3457 11 14C11 15.6543 12.3457 17 14 17C14.5547 17 15.0682 16.8384 15.5144 16.5752L16.7197 17.7803C16.8662 17.9268 17.0581 18 17.25 18C17.4419 18 17.6338 17.9268 17.7803 17.7803C18.0733 17.4873 18.0733 17.0126 17.7803 16.7197ZM12.5 14C12.5 13.1729 13.1729 12.5 14 12.5C14.8271 12.5 15.5 13.1729 15.5 14C15.5 14.4126 15.3324 14.7866 15.062 15.0581C15.0613 15.0586 15.0603 15.0586 15.0596 15.0596C15.0589 15.0606 15.0587 15.0616 15.058 15.062C14.7866 15.3325 14.4126 15.5 14.0001 15.5C13.173 15.5 12.5 14.8271 12.5 14Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default WindowSearch;
