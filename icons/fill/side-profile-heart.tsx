import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SideProfileHeart({
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
          d="M17.099,9.299h0s-1.354-1.805-1.354-1.805c-.072-1.944-.972-3.749-2.49-4.984-1.587-1.289-3.665-1.783-5.701-1.359C5.005,1.684,2.935,3.753,2.401,6.302c-.599,2.868,.639,5.7,3.099,7.191v2.756c0,.414,.336,.75,.75,.75h5c.414,0,.75-.336,.75-.75v-1.75h.89c1.435,0,2.64-1.121,2.742-2.551l.078-1.075,1.068-.427c.217-.086,.381-.269,.443-.494,.063-.225,.019-.466-.122-.653Zm-7.897,1.088c-.127,.067-.276,.067-.403,0-.673-.354-2.798-1.636-2.798-3.72-.003-.916,.73-1.661,1.64-1.667,.547,.007,1.056,.285,1.36,.743,.304-.458,.813-.736,1.36-.743,.91,.006,1.643,.751,1.64,1.667,0,2.085-2.125,3.367-2.798,3.72Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SideProfileHeart;
