import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BookBookmark({
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
          d="M2.00208 14.2501C2.00375 13.0104 3.00922 12.0062 4.24895 12.0062H15.2541C15.539 12.0062 15.7993 12.1677 15.9259 12.4229C16.0526 12.6781 16.0237 12.983 15.8514 13.2099C15.3938 13.8123 15.3376 14.6345 15.8442 15.2924C16.0186 15.5188 16.0492 15.8247 15.923 16.0811C15.7968 16.3376 15.5359 16.5 15.2501 16.5H4.24895C3.00685 16.5 2.0004 15.4922 2.00208 14.2501Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 1.5C3.23079 1.5 2 2.73079 2 4.25V14.3176L2.00208 14.2501C2.00375 13.0104 3.00922 12.0062 4.24895 12.0062H15.2541C15.539 12.0062 15.7993 12.1677 15.9259 12.4229C15.9663 12.5042 15.9908 12.5905 16 12.6778V2.25C16 1.83579 15.6642 1.5 15.25 1.5H4.75ZM6.5 9.25C6.5 9.6642 6.164 10 5.75 10C5.336 10 5 9.6642 5 9.25C5 8.8358 5.336 8.5 5.75 8.5C6.164 8.5 6.5 8.8358 6.5 9.25ZM5.75 5C6.164 5 6.5 4.6642 6.5 4.25C6.5 3.8358 6.164 3.5 5.75 3.5C5.336 3.5 5 3.8358 5 4.25C5 4.6642 5.336 5 5.75 5ZM6.5 6.75C6.5 7.1642 6.164 7.5 5.75 7.5C5.336 7.5 5 7.1642 5 6.75C5 6.3358 5.336 6 5.75 6C6.164 6 6.5 6.3358 6.5 6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11 14H7V17.5C7 17.702 7.12199 17.885 7.30899 17.962C7.49599 18.041 7.71 17.997 7.854 17.854L9 16.708L10.146 17.854C10.242 17.95 10.37 18 10.5 18C10.564 18 10.63 17.988 10.691 17.962C10.878 17.885 11 17.702 11 17.5V14Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BookBookmark;
