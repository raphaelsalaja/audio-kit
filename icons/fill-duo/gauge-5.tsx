import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Gauge5({
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
          d="M12.7805 5.2598C12.7738 5.2525 12.7717 5.243 12.7646 5.2359C12.7576 5.2288 12.748 5.2269 12.7408 5.22C10.4337 2.9229 7.2551 1.5 3.75 1.5C3.3359 1.5 3 1.8359 3 2.25V4.5C3 4.9141 3.3359 5.25 3.75 5.25C4.1641 5.25 4.5 4.9141 4.5 4.5V3.0249C7.0382 3.1929 9.3438 4.21261 11.1476 5.79221L9.8369 7.10251C9.5439 7.39551 9.5439 7.87009 9.8369 8.16299C9.9834 8.30949 10.1748 8.38269 10.3672 8.38269C10.5596 8.38269 10.751 8.30949 10.8975 8.16299L12.2082 6.85269C13.7879 8.65619 14.8076 10.9618 14.9756 13.4999H13.5C13.0859 13.4999 12.75 13.8358 12.75 14.2499C12.75 14.664 13.0859 14.9999 13.5 14.9999H15.75C16.1641 14.9999 16.5 14.664 16.5 14.2499C16.5 10.745 15.0774 7.5669 12.7805 5.2598Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.7197 9.21968L4.7805 12.1589C4.5405 12.0568 4.2768 12 4 12C2.8975 12 2 12.897 2 14C2 15.103 2.8975 16 4 16C5.1025 16 6 15.103 6 14C6 13.7231 5.94319 13.4595 5.84109 13.2195L8.7803 10.2803C9.0733 9.98729 9.0733 9.51267 8.7803 9.21977C8.4873 8.92687 8.0126 8.92668 7.7197 9.21968Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Gauge5;
