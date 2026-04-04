import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slice({
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
          d="M12.7324 6.96667C13.0252 7.25956 13.0252 7.73444 12.7324 8.02733L9.44967 11.31L9.45202 12.4504C9.45242 12.6426 9.37905 12.8276 9.24705 12.9672C7.4859 14.8302 4.78935 16.2667 1.19411 15.9979C0.901734 15.9761 0.648904 15.7858 0.546888 15.511C0.444871 15.2361 0.512376 14.927 0.719692 14.7197L9.67569 5.76368C9.96859 5.47078 10.4435 5.47078 10.7364 5.76368L12.7324 6.96667Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.253 2.18501C14.166 1.27301 15.651 1.27301 16.564 2.18501C17.477 3.09901 17.476 4.58401 16.563 5.49601L12.985 9.07401C12.845 9.21501 12.654 9.29401 12.455 9.29401C12.256 9.29401 12.066 9.21501 11.925 9.07401L9.14459 6.29343L13.253 2.18501Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Slice;
