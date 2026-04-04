import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserBookmark({
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
          d="M11.4589 9.44513C10.6944 9.15746 9.86589 9 8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.29503 16.6354 6.99283 17 8.99999 17C9.52149 17 10.0221 16.9754 10.5 16.9319V11.75C10.5 10.8492 10.8667 10.0338 11.4589 9.44513Z"
          fill={fill}
        />
        <path
          d="M12 11.75C12 10.7838 12.7838 10 13.75 10H16.25C17.2162 10 18 10.7838 18 11.75V17.25C18 17.5533 17.8173 17.8268 17.537 17.9429C17.2568 18.059 16.9342 17.9948 16.7197 17.7803L15 16.0607L13.2803 17.7803C13.0658 17.9948 12.7432 18.059 12.463 17.9429C12.1827 17.8268 12 17.5533 12 17.25V11.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserBookmark;
