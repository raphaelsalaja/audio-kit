import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DeviceMockup({
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
          d="M10.566 6.56669C11.2748 6.24669 12.0954 6.26349 12.7937 6.62129C14.0466 7.26327 15.2813 7.94422 16.5243 8.60538C17.3891 9.06662 17.4799 10.2174 16.8022 10.8297C16.6473 10.9697 16.4494 11.0658 16.4187 11.0827L7.61659 15.9216C6.87401 16.3302 5.97735 16.3463 5.2216 15.965C3.96049 15.3287 2.72397 14.6371 1.47684 13.9737C0.558334 13.4838 0.506705 12.2054 1.34487 11.6338C1.44734 11.5639 1.584 11.4916 1.64993 11.4568C4.54324 9.92724 7.38909 8.30397 10.2572 6.72736C10.3229 6.69127 10.4433 6.62209 10.566 6.56669Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.566 1.96418C11.2748 1.64419 12.0954 1.66098 12.7937 2.01879C14.0466 2.66076 15.2813 3.34171 16.5243 4.00287C17.3891 4.46411 17.4799 5.61489 16.8022 6.22717C16.6473 6.36716 16.4494 6.46326 16.4187 6.48016L7.61659 11.3191C6.87401 11.7277 5.97735 11.7438 5.2216 11.3625C3.96049 10.7262 2.72397 10.0346 1.47684 9.37118C0.558334 8.88131 0.506705 7.6029 1.34487 7.03126C1.44734 6.96138 1.584 6.88913 1.64993 6.85428C4.54324 5.32473 7.38909 3.70146 10.2572 2.12486C10.3229 2.08876 10.4433 2.01958 10.566 1.96418Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default DeviceMockup;
