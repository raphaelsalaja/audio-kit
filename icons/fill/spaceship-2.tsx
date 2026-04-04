import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Spaceship2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m4.679,9.34c-.203-.311-.593-.406-.922-.265-.273-.662-.471-1.297-.585-1.903l.372-.322c.313-.271.347-.745.076-1.058-.271-.312-.745-.348-1.058-.076l-1.386,1.201c-.453.393-.672.981-.585,1.574l.417,2.866c.037.253.2.47.434.576.098.044.204.066.309.066.143,0,.286-.041.41-.122l2.301-1.5c.347-.227.445-.691.219-1.038Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.321,9.34c.203-.311.593-.406.922-.265.273-.662.471-1.297.585-1.903l-.372-.322c-.313-.271-.347-.745-.076-1.058.271-.312.745-.348,1.058-.076l1.386,1.201c.453.393.672.981.585,1.574l-.417,2.866c-.037.253-.2.47-.434.576-.098.044-.204.066-.309.066-.143,0-.286-.041-.41-.122l-2.301-1.5c-.347-.227-.445-.691-.219-1.038Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m7.949,10.5h-3.898c-.288,0-.551-.165-.676-.425C1.402,5.976,2.161,2.539,5.568.137c.259-.183.605-.183.864,0,3.407,2.402,4.166,5.839,2.193,9.938-.125.26-.388.425-.676.425Zm-3.417-1.5h2.937c1.334-3.058.853-5.458-1.468-7.313-2.321,1.854-2.802,4.255-1.468,7.313Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m6,12c-.414,0-.75-.336-.75-.75v-3c0-.414.336-.75.75-.75s.75.336.75.75v3c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <circle cx="6" cy="4.25" fill={secondaryfill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Spaceship2;
