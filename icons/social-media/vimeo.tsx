import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Vimeo({
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
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d="M29.236,9.481c-.125,2.731-2.028,6.47-5.711,11.216-3.807,4.958-7.028,7.436-9.662,7.436-1.632,0-3.013-1.509-4.141-4.529-.754-2.768-1.507-5.535-2.26-8.303-.838-3.018-1.736-4.529-2.697-4.529-.209,0-.942,.442-2.197,1.321l-1.317-1.7c1.382-1.217,2.745-2.433,4.086-3.651,1.843-1.596,3.227-2.435,4.149-2.519,2.179-.21,3.521,1.283,4.024,4.477,.544,3.447,.92,5.591,1.132,6.43,.628,2.86,1.319,4.288,2.074,4.288,.586,0,1.466-.928,2.64-2.782,1.173-1.855,1.801-3.267,1.885-4.236,.167-1.601-.461-2.404-1.885-2.404-.67,0-1.361,.155-2.072,.46,1.376-4.516,4.005-6.71,7.886-6.584,2.877,.085,4.233,1.954,4.068,5.609Z" />
      </g>
    </svg>
  );
}

export default Vimeo;
