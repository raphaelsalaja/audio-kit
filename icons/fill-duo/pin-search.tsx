import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinSearch({
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
          d="M7.75 1C4.02195 1 1 4.02392 1 7.75C1 10.2465 2.22115 12.4149 3.58989 13.9916C4.27887 14.7854 5.02063 15.4477 5.6999 15.9477C6.36652 16.4385 7.0159 16.8047 7.52415 16.9652C7.67114 17.0116 7.82886 17.0116 7.97585 16.9652C8.4841 16.8047 9.13348 16.4385 9.8001 15.9477C9.861 15.9029 9.9224 15.8568 9.98422 15.8093C9.36828 15.0395 9 14.0628 9 13C9 10.5144 11.0144 8.5 13.5 8.5C13.8269 8.5 14.1457 8.53485 14.4528 8.60104C14.4837 8.322 14.5 8.03819 14.5 7.75C14.5 4.02392 11.4781 1 7.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.5 10C11.8428 10 10.5 11.3428 10.5 13C10.5 14.6572 11.8428 16 13.5 16C14.0565 16 14.5775 15.8486 15.0241 15.5848L16.2196 16.7803C16.5125 17.0732 16.9874 17.0732 17.2803 16.7803C17.5732 16.4874 17.5732 16.0126 17.2803 15.7197L16.0847 14.5241C16.3486 14.0775 16.5 13.5565 16.5 13C16.5 11.3428 15.1572 10 13.5 10ZM12 13C12 12.1712 12.6712 11.5 13.5 11.5C14.3288 11.5 15 12.1712 15 13C15 13.8288 14.3288 14.5 13.5 14.5C12.6712 14.5 12 13.8288 12 13Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5 7.75C5 6.23193 6.23104 5 7.75 5C9.26896 5 10.5 6.23193 10.5 7.75C10.5 9.26807 9.26896 10.5 7.75 10.5C6.23104 10.5 5 9.26807 5 7.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinSearch;
