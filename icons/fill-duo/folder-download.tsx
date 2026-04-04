import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderDownload({
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
          d="M15.5 12.25C15.5 11.8358 15.1642 11.5 14.75 11.5C14.3358 11.5 14 11.8358 14 12.25V15.4393L12.7803 14.2197C12.4874 13.9268 12.0126 13.9268 11.7197 14.2197C11.4268 14.5126 11.4268 14.9874 11.7197 15.2803L14.2197 17.7803C14.5126 18.0732 14.9874 18.0732 15.2803 17.7803L17.7803 15.2803C18.0732 14.9874 18.0732 14.5126 17.7803 14.2197C17.4874 13.9268 17.0126 13.9268 16.7197 14.2197L15.5 15.4393V12.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H10.3787C9.79319 15.1256 9.88665 13.9314 10.659 13.159C11.162 12.656 11.844 12.4409 12.5 12.5138V12.25C12.5 11.0074 13.5074 10 14.75 10C15.4568 10 16.0875 10.3259 16.5 10.8357V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderDownload;
