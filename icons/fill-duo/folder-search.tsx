import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSearch({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M17.7802 16.7197L16.5749 15.5144C16.8384 15.0682 16.9999 14.5547 16.9999 14C16.9999 12.3457 15.6542 11 13.9999 11C12.3456 11 10.9999 12.3457 10.9999 14C10.9999 15.6543 12.3456 17 13.9999 17C14.5546 17 15.0681 16.8384 15.5143 16.575L16.7196 17.7803C16.8661 17.9268 17.0575 18 17.2499 18C17.4423 18 17.6337 17.9268 17.7802 17.7803C18.0732 17.4873 18.0732 17.0126 17.7802 16.7197ZM12.4999 14C12.4999 13.1729 13.1728 12.5 13.9999 12.5C14.827 12.5 15.4999 13.1729 15.4999 14C15.4999 14.8253 14.8305 15.4999 14 15.4999C13.1729 15.4999 12.4999 14.8271 12.4999 14Z"
          fill={fill}
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H9.96871C9.66871 15.3973 9.49994 14.7181 9.49994 14C9.49994 11.5173 11.5172 9.5 13.9999 9.5C14.9246 9.5 15.7846 9.7798 16.5 10.2592V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderSearch;
