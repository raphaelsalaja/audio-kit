import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderSend({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H10.3789C10.1396 15.6425 10 15.2125 10 14.75C10 13.5074 11.0074 12.5 12.25 12.5H12.5138C12.4409 11.844 12.656 11.162 13.159 10.659C14.0377 9.78033 15.4623 9.78033 16.341 10.659L16.5 10.818V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M15.2803 11.7197C14.9874 11.4268 14.5126 11.4268 14.2197 11.7197C13.9268 12.0126 13.9268 12.4874 14.2197 12.7803L15.4393 14H12.25C11.8358 14 11.5 14.3358 11.5 14.75C11.5 15.1642 11.8358 15.5 12.25 15.5H15.4393L14.2197 16.7197C13.9268 17.0126 13.9268 17.4874 14.2197 17.7803C14.5126 18.0732 14.9874 18.0732 15.2803 17.7803L17.7803 15.2803C18.0732 14.9874 18.0732 14.5126 17.7803 14.2197L15.2803 11.7197Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderSend;
