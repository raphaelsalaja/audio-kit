import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderBookmark({
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
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H10.5V11.75C10.5 9.95536 11.9554 8.5 13.75 8.5H16.25C16.3341 8.5 16.4175 8.5032 16.5 8.50948V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M12 11.75C12 10.7838 12.7838 10 13.75 10H16.25C17.2162 10 18 10.7838 18 11.75V17.25C18 17.5533 17.8173 17.8268 17.537 17.9429C17.2568 18.059 16.9342 17.9948 16.7197 17.7803L15 16.0607L13.2803 17.7803C13.0658 17.9948 12.7432 18.059 12.463 17.9429C12.1827 17.8268 12 17.5533 12 17.25V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FolderBookmark;
