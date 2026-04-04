import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagicHat({
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
          d="m4.0447,7.6416c.0925,1.0405.1061,2.033.0721,3.0181,1.2891.3655,2.9995.5903,4.8832.5903s3.5941-.2249,4.8832-.5903c-.0341-.9851-.0204-1.9775.0721-3.0181-3.2076.7993-6.5083.8232-9.9106,0Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m13.8793,10.6642c-1.288.3639-3.0002.5858-4.8793.5858s-3.5912-.2219-4.8793-.5858"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m13.9553,7.6416c-.1949,2.1921-.058,4.1756.1958,6.3103.0553.4653-.212.9221-.6568,1.0695-2.9962.9924-5.9924.9924-8.9886,0-.4448-.1473-.7121-.6042-.6568-1.0695.2538-2.1347.3907-4.1182.1958-6.3103"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m9.157,2.0042l-1.262-.424-.421-1.272c-.137-.411-.812-.411-.949,0l-.421,1.272-1.262.424c-.204.068-.342.261-.342.477s.138.4091.342.4771l1.262.424.421,1.272c.068.205.26.344.475.344s.406-.139.475-.344l.421-1.272,1.262-.424c.204-.068.342-.261.342-.4771s-.139-.409-.343-.477Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.2784,4.6216c-.9545.3811-1.5284.8584-1.5284,1.3784,0,1.2427,3.2459,2.25,7.25,2.25s7.25-1.0073,7.25-2.25c0-.7041-1.0438-1.3323-2.676-1.7449"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.75,6c.414,0,.75-.336.75-.75s-.336-.75-.75-.75-.75.336-.75.75.336.75.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MagicHat;
